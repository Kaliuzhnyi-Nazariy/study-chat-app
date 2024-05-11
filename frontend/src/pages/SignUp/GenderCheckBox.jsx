// import React from 'react'
// start code: rafce

const GenderCheckBox = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-warning"
          />
        </label>
      </div>

      <div className="flex-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-warning"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
