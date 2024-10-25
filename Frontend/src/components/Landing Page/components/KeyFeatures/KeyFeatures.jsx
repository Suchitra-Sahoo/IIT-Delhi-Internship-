import React from 'react';
import FeatureBox1 from '../KeyFeatures/FeatureBoxes/FeatureBox1';
import FeatureBox2 from '../KeyFeatures/FeatureBoxes/FeatureBox2';
import FeatureBox3 from '../KeyFeatures/FeatureBoxes/FeatureBox3';
import FeatureBox4 from '../KeyFeatures/FeatureBoxes/FeatureBox4';
import FeatureBox5 from '../KeyFeatures/FeatureBoxes/FeatureBox5';
import FeatureBox6 from '../KeyFeatures/FeatureBoxes/FeatureBox6';


function KeyFeatures() {
  return (
    <>
      <h1 className="text-center font-semibold mt-10 text-4xl text-slate-600 mb-10">
        Key Features
      </h1>

      {/* Container for feature boxes */}
      <div className="flex flex-col md:flex-row md:justify-around gap-y-4 md:gap-x-4">
        <FeatureBox1 />
        <FeatureBox2 />
        <FeatureBox3 />
      </div>
      <div className="flex flex-col md:flex-row md:justify-around gap-y-4 md:gap-x-4 mt-5 mb-8">
        <FeatureBox4 />
        <FeatureBox5 />
        <FeatureBox6 />
      </div>
    </>
  );
}

export default KeyFeatures;
