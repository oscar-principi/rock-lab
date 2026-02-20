interface FormInputProps {
  name: string;
  value: string;
  placeholder: string;
  disabled: boolean;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputClasses = "w-full p-3 rounded-xl border border-gray-300 outline-none transition-colors bg-white dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100 dark:focus:border-red-500 disabled:opacity-50";

export const FormInput = ({ name, value, placeholder, disabled, type = "text", onChange }: FormInputProps) => (
  <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    onChange={onChange}
    className={inputClasses}
  />
);
