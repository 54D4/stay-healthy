import PropTypes from "prop-types";

const Success = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col items-center px-12 py-2 bg-gradient-to-r from-yellow-300 to-green-400 my-20 rounded-lg shadow-lg">
        <h1 className="text-5xl my-2 capitalize">{data[0].name}</h1>
        <h1 className="text-2xl my-2 ">calories: {data[0].calories} kcal</h1>
        <h1 className="text-2xl my-2 ">
          serving size: {data[0].serving_size_g} g
        </h1>
        <h1 className="text-2xl my-2 ">
          cholesterol: {data[0].cholesterol_mg} mg
        </h1>
        <h1 className="text-2xl my-2 ">
          fat saturated: {data[0].fat_saturated_g} g
        </h1>
        <h1 className="text-2xl my-2 ">fat total: {data[0].fat_total_g} g</h1>
        <h1 className="text-2xl my-2 ">fiber: {data[0].fiber_g} g</h1>
        <h1 className="text-2xl my-2 ">potassium: {data[0].potassium_mg} mg</h1>
        <h1 className="text-2xl my-2 ">protein: {data[0].protein_g} g</h1>
        <h1 className="text-2xl my-2 ">sodium: {data[0].sodium_mg} mg</h1>
        <h1 className="text-2xl my-2 ">sugar: {data[0].sugar_g} g</h1>
      </div>
    </div>
  );
};

Success.propTypes = {
  data: PropTypes.object,
};

export default Success;
