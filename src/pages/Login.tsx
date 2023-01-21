import { Icon } from "@components/shared/Icon/Icon";
import { useLoginFormik } from "@components/Login/useLoginFormik";

interface Props {
  onLogIn: () => void;
}

export const Login = (props: Props) => {
  const formik = useLoginFormik({
    async onSubmit(values, formikHelpers) {
      values.password;
    },
  });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="mb-6 text-secondary w-28 h-28 border-80 border-green-300 rounded-full bg-green-300"></div>
      <h1 className=" mb-6 font-semibold">Welcome Guest</h1>
      <input
        className=" mb-6 pl-4 pr-6 rounded-full text-end border border-black"
        id="password"
        type="password"
        name="password"
        onChange={formik.handleChange}
      ></input>
      <button
        onSubmit={formik.handleSubmit}
        onClick={props.onLogIn}
        type="submit"
        className="mb-6 flex justify-center items-center"
      >
        Unlock <Icon className="w-3 ml-2" icon="arrow-right" />
      </button>
    </div>
  );
};
