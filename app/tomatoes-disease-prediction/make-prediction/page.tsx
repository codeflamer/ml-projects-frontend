import PredictionDisplay from "@/components/tomatoes-model/prediction-display";

const Prediction = () => {
  return (
    <div className="text-center">
      <h2>Tomatoes Disease Classification</h2>
      <div>
        <h4>Please upload the image with JPG format</h4>
      </div>
      <section>
        <PredictionDisplay />
      </section>
    </div>
  );
};

export default Prediction;
