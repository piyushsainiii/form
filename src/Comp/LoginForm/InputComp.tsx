// InputComp.tsx

import './InputComp.css'; 

interface InputProps {
  type: string;
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (event: any) => void;
  inputRef: any;
}

const InputComp: React.FC<InputProps> = ({ type, id, label, name, value, onChange, inputRef }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} value={value} onChange={onChange} ref={inputRef} />
    </div>
  );
};

export default InputComp;
