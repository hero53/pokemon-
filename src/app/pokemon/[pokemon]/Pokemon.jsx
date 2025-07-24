export const StatBar = ({ label, value, max = 200, color = 'success' }) => {
  const percent = (value / max) * 100;

  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <strong>{label}</strong>
        <span>{value ?? 0} / {max ?? 0}</span>
      </div>
      <div className="progress" style={{ height: '20px' }}>
        <div
          className={`progress-bar bg-${color}`}
          role="progressbar"
          style={{ width: `${percent}%` }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax={max}
        ></div>
      </div>
    </div>
  );
};

