import PropTypes from "prop-types";

const IsError = () => {
  return (
    <div className=" flex flex-col items-center ">
      <h1 className=" text-5xl capitalize my-8">something went wrong</h1>
      <p className=" text-xl capitalize my-4">try another phrase</p>
    </div>
  );
};

IsError.propTypes = {
  clickHandler: PropTypes.func,
};

export default IsError;
