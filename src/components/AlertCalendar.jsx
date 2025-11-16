import React, { useState } from 'react';
import { Bell, Calendar as CalendarIcon, CheckCircle, Plus } from 'lucide-react';

function getMonthData(year, month) {
  const first = new Date(year, month, 1);
  const firstDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let calendar = [];
  let week = [];
  for (let i = 0; i < firstDay; i++) week.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    week.push(new Date(year, month, d));
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }
  while (week.length < 7) week.push(null);
  if (week.some((d) => d !== null)) calendar.push(week);
  return calendar;
}

const monthNames = [
  'Enero','Febrero','Marzo','Abril','Mayo','Junio',
  'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
];

const initialAlerts = [
  { id: 1, title: 'Alta humedad: riesgo mildiu', description: 'Revisar lote 2', date: '2025-11-19', completed: false },
  { id: 2, title: 'Aplicar preventivo', description: 'Fungicida lote 1', date: '2025-11-23', completed: false },
  { id: 3, title: 'Inspección semanal', description: 'Campo sur', date: '2025-11-24', completed: false }
];

const today = new Date();

function exportICalendar(alerts) {
  function escapeICal(text) {
    return (text || '')
      .replace(/\\n/g, '\\n')
      .replace(/,/g, '\\,')
      .replace(/;/g, '\\;');
  }
  let ics =
    "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nCALSCALE:GREGORIAN\r\nPRODID:-//PlantClinic//AgroCalendar//ES\r\n";
  alerts.forEach(ev => {
    if (ev.completed) return;
    const start = ev.date.replace(/-/g, '');
    ics += `BEGIN:VEVENT\r\n`;
    ics += `DTSTART;VALUE=DATE:${start}\r\n`;
    ics += `DTEND;VALUE=DATE:${start}\r\n`;
    ics += `SUMMARY:${escapeICal(ev.title)}\r\n`;
    if (ev.description) ics += `DESCRIPTION:${escapeICal(ev.description)}\r\n`;
    ics += `END:VEVENT\r\n`;
  });
  ics += "END:VCALENDAR\r\n";
  const blob = new Blob([ics], {type: 'text/calendar'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "plantclinic_agenda.ics";
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{URL.revokeObjectURL(url);a.remove();},100);
}

const AlertCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [alerts, setAlerts] = useState(initialAlerts);
  const [modal, setModal] = useState({ open: false, date: null });
  const [newAlert, setNewAlert] = useState({ title: '', description: '', date: '' });

  const monthData = getMonthData(currentYear, currentMonth);

  const openDayModal = (date) => { setModal({ open: true, date }); };
  const closeModal = () => { setModal({ open: false, date: null }); };

  const addAlert = (e) => {
    e.preventDefault();
    if (!newAlert.title) return;
    setAlerts([
      ...alerts,
      {
        ...newAlert,
        id: Date.now(),
        date: modal.date.toISOString().split('T')[0],
        completed: false
      }
    ]);
    setNewAlert({ title: '', description: '', date: '' });
    closeModal();
  };

  const markCompleted = (id) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, completed: true } : a));
  };

  const alertsForDay = (dateStr) => alerts.filter(a => a.date === dateStr && !a.completed);

  return (
    <section className="alerts-calendar-section">
      <div className="container">
        <div className="section-header">
          <Bell className="section-icon" />
          <h2 className="section-title">Alertas & Calendario</h2>
          <p className="section-description">
            Visualiza tus tareas y alertas agrícolas en modo calendario.
          </p>
        </div>
        <div className="calendar-nav">
          <button onClick={() => setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1)
            || setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear)}>
            ←
          </button>
          <span>{monthNames[currentMonth]} {currentYear}</span>
          <button onClick={() => setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1)
            || setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear)}>
            →
          </button>
        </div>
        <button
          className="export-ical-btn"
          onClick={() => exportICalendar(alerts)}
        >
          Exportar a Google Calendar / Outlook
        </button>
        <div className="calendar-grid">
          <div className="calendar-weekday" key="L">L</div>
          <div className="calendar-weekday" key="M">M</div>
          <div className="calendar-weekday" key="X">X</div>
          <div className="calendar-weekday" key="J">J</div>
          <div className="calendar-weekday" key="V">V</div>
          <div className="calendar-weekday" key="S">S</div>
          <div className="calendar-weekday" key="D">D</div>
          {monthData.flat().map((date, idx) => {
            if (!date) return <div key={idx} className="calendar-day empty"></div>;
            const dateStr = date.toISOString().split('T')[0];
            const isToday =
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear();
            const alertsDay = alertsForDay(dateStr);
            return (
              <div key={idx} className={`calendar-day${isToday ? ' today' : ''}`} onClick={() => openDayModal(date)}>
                <div className="day-number">{date.getDate()}</div>
                {alertsDay.length > 0 && (
                  <span className="calendar-alert-dot">{alertsDay.length}</span>
                )}
              </div>
            );
          })}
        </div>
        {/* MODAL DE DÍA */}
        {modal.open && (
          <div className="calendar-modal-bg" onClick={closeModal}>
            <div className="calendar-modal" onClick={e => e.stopPropagation()}>
              <div className="modal-date-header">
                <CalendarIcon size={18} style={{marginRight:6}} />
                <span>{modal.date.toLocaleDateString()}</span>
                <button className="modal-close" onClick={closeModal}>×</button>
              </div>
              <ul className="modal-alert-list">
                {alertsForDay(modal.date.toISOString().split('T')[0]).length === 0 && (
                  <li className="empty-alert">Sin alertas/tareas</li>
                )}
                {alertsForDay(modal.date.toISOString().split('T')[0]).map(a =>
                  <li key={a.id}>
                    <div className="modal-alert-title">{a.title}</div>
                    <div className="modal-alert-desc">{a.description}</div>
                    <button onClick={()=>markCompleted(a.id)} className="modal-alert-done">
                      <CheckCircle size={16} /> Hecho
                    </button>
                  </li>
                )}
              </ul>
              <form className="new-alert-modal-form" onSubmit={addAlert}>
                <input
                  type="text"
                  value={newAlert.title}
                  onChange={e => setNewAlert({...newAlert, title: e.target.value})}
                  placeholder="Nueva alerta/tarea"
                  required
                />
                <input
                  type="text"
                  value={newAlert.description}
                  onChange={e => setNewAlert({...newAlert, description: e.target.value})}
                  placeholder="Descripción (opcional)"
                />
                <button type="submit"><Plus size={16}/> Añadir</button>
              </form>
            </div>
          </div>
        )}
      </div>
      {/* ESTILOS */}
      <style>{`
        .alerts-calendar-section { padding:70px 0; background: #f7fafc;}
        .container { max-width: 920px; margin: 0 auto; }
        .section-header { text-align:center; margin-bottom:36px;}
        .section-title { font-size: 2.1em; font-weight: 700; color: #146357;}
        .section-icon { width:38px; height:38px; color:#16a34a;}
        .calendar-nav { display:flex;gap:18px;align-items:center;justify-content:center;margin-bottom:24px;}
        .calendar-nav button { background:#dcfce7;border:none;padding:8px 18px; font-weight:700;font-size:17px;border-radius:6px;cursor:pointer;color:#16a34a;}
        .calendar-nav span {font-size:1.12em;font-weight:600;}
        .export-ical-btn {
          margin-bottom: 20px;
          background: linear-gradient(93deg,#107c41,#4ade80);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          padding: 12px 28px;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(16,124,65,0.11);
          transition: background 0.2s;
        }
        .export-ical-btn:hover {
          background: linear-gradient(93deg,#4ade80,#107c41);
        }
        .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; background:#fff; padding:12px;border-radius:10px;box-shadow:0 7px 20px rgba(22,163,74,0.07);}
        .calendar-weekday { text-align:center; font-weight:600; color:#17884b; padding-bottom:4px;}
        .calendar-day { background: #f0fdf4; min-height:58px; border-radius:7px; text-align:center; cursor:pointer; position:relative; transition: box-shadow 0.2s;}
        .calendar-day.today { border:2px solid #16a34a; }
        .calendar-day:hover { box-shadow:0 0 8px #bbf7d0; }
        .calendar-day.empty { background:none; cursor:default;}
        .day-number { font-size:18px; font-weight:600; color:#14532d; margin-top:2px;}
        .calendar-alert-dot { background: #16a34a; color: #fff; min-width: 22px; padding:1px 0; border-radius:13px; font-size:13px; font-weight:700; position:absolute; right:8px; bottom:8px;display:inline-block;}
        .calendar-modal-bg { position:fixed;left:0;top:0;width:100vw;height:100vh;background:rgba(14,124,65,0.16);z-index:99;display:flex;align-items:center;justify-content:center;}
        .calendar-modal { background:#fff; border-radius:10px; box-shadow: 0 4px 32px rgba(22,163,74,0.15); padding:22px 30px; min-width:300px;max-width:94vw;}
        .modal-date-header { display:flex;align-items:center;gap:8px;margin-bottom:10px;}
        .modal-close { margin-left:auto; font-size:21px;color:#666; background:none;border:none;cursor:pointer;}
        .modal-alert-list { list-style:none;padding:0;margin-bottom:9px; }
        .modal-alert-list li { padding:2px 0;padding-bottom:7px;border-bottom:1px solid #f3f4f6;}
        .modal-alert-title { font-weight:700; color:#14532d;}
        .modal-alert-desc { color:#327757; font-size:15px;}
        .modal-alert-done { background:#16a34a;color:#fff;border:none;padding:5px 13px;border-radius:6px;font-size:13px;margin-top:4px;display:flex;align-items:center;gap:4px;cursor:pointer;}
        .modal-alert-list li:last-child {border-bottom:none;}
        .empty-alert {color:#b0b0b0;font-style:italic;}
        .new-alert-modal-form { display:flex; gap:8px; margin-top:10px; }
        .new-alert-modal-form input { border:1.5px solid #bbf7d0;border-radius:6px;padding:8px 12px;font-size:15px;}
        .new-alert-modal-form button { background: linear-gradient(90deg,#16a34a,#4ade80);color:#fff;border:none;border-radius:6px;padding:8px 15px;display:flex;align-items:center;gap:5px;font-weight:600;}
        .new-alert-modal-form button:hover { background: linear-gradient(90deg,#4ade80,#16a34a);}
        @media (max-width:800px) { .calendar-grid { padding:2px;} .container {padding:0 8px;} .calendar-modal{min-width:10vw;padding:12px 4vw;} }
      `}</style>
    </section>
  );
};

export default AlertCalendar;
