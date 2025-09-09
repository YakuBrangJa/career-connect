import {useForm, Controller} from "react-hook-form";

type FormValues = {
  userData: {
    name: string;
    ["acceptTerms"]: boolean;
    ["subscribe, sub"]: boolean;
    ["book, pencil"]: boolean;
  };
};

const checkboxes = [
  {key: "acceptTerms", label: "I accept the terms and conditions"},
  {key: "subscribe, sub", label: "Subscribe to newsletter"},
  {key: "book, pencil", label: "Book, Pencil"},
];

export default function CheckboxForm () {
  const {control, handleSubmit} = useForm<FormValues>({
    defaultValues: {
      userData: {
        name: "",
        acceptTerms: false,
        ["subscribe, sub"]: false,
        ["book, pencil"]: false,
      },
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Text Box */}
      <Controller
        name="userData.name"
        control={control}
        render={({field}) => (
          <input
            type="text"
            placeholder="Enter your name"
            {...field}
            className="border px-2 py-1 rounded w-full"
          />
        )}
      />

      {/* Dynamic Checkboxes */}
      {checkboxes.map(({key, label}) => (
        <Controller
          key={key}
          // name={`userData["${key}"]`} // bracket notation for safety
          name={`userData.${key}`} // bracket notation for safety
          control={control}
          render={({field}) => (
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
              <span>{label}</span>
            </label>
          )}
        />
      ))}

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
}
