interface FormTextareaProps {
  name: string;
  value: string;
  placeholder: string;
  rows?: number;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const inputClasses = "w-full p-3 rounded-xl border border-gray-300 outline-none transition-colors bg-white dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:focus:border-red-500 disabled:opacity-50";

export const FormTextarea = ({ name, value, placeholder, rows = 4, disabled, onChange }: FormTextareaProps) => (
  <textarea
    name={name}
    value={value}
    placeholder={placeholder}
    rows={rows}
    disabled={disabled}
    onChange={onChange}
    className={inputClasses}
  />
);
