// import { Result } from 'postcss';
import { useState } from 'react'

function App() {

  const [active, setActive] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [randomValue, setRandomValue] = useState('');

  const [includeUppercaseLetters, setIncludeUppercaseLetters] = useState(false);
  const [includeLowercaseLetters, setIncludeLowercaseLetters] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleRangeChange = (event) => {
    const newValue = event.target.value;
    setRangeValue(newValue);
  };

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
  };

  const randomGenerator = () => {
    // Define the character sets.
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const specialSymbols = '!@#$%^&*';

    // Create an empty string to store the character sets based on checkboxes.
    let selectedCharacters = '';

    // Check the checkbox states and add the corresponding character sets.
    if (includeUppercaseLetters) {
      selectedCharacters += uppercaseLetters;
    }
    if (includeLowercaseLetters) {
      selectedCharacters += lowercaseLetters;
    }
    if (includeNumbers) {
      selectedCharacters += numbers;
    }
    if (includeSymbols) {
      selectedCharacters += specialSymbols;
    }

    let result = '';
    const length = sliderValue;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * selectedCharacters.length);
      result += selectedCharacters[randomIndex];
    }

    setRandomValue(result); // Update the state with the generated result.
  };
  return (
  <>
    <div className="w-screen h-screen bg-gradient-to-r from-bg-blackOne to-bg-blackTwo flex flex-col justify-center">
      <div className=" max-w-[343px] w-[100%] h-auto mx-auto">
        <h1 className="text-title-grey text-center font-jetbrain text-base font-bold">
          Password Generator
        </h1>
  
        <div
          className="max-w-[343px] h-[64px] bg-div-bg mt-[16px] pl-[16px] pr-[15.5px] flex items-center justify-between">
          <p className=" font-jetbrain font-bold text-pass text-pass-color">
            {randomValue}
          </p>
          <img src="./images/icon-copy.svg" alt="Copy" />
        </div>
        <div className="max-w-[343px] h-auto bg-div-bg p-[16px] mt-[16px]">
          <div className="w-auto flex items-center justify-between">
            <span className="font-jetbrain font-bold text-pass-color leading-normal">
              Character Length
            </span>
            <p className="font-jetbrain font-bold text-pass text-neon-green">
              {sliderValue}
            </p>
          </div>
  
          <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={sliderValue}
              onChange={handleSliderChange}
              className="range w-full h-[8px] outline-none"
            />

          <div className='flex flex-col mt-[42px]'>
            <label className="flex items-center">
              <input type="checkbox"
              checked={includeUppercaseLetters}
              onChange={() => setIncludeUppercaseLetters(!includeUppercaseLetters)} />
              <span className="ml-[20px] font-jetbrain font-bold text-16px text-pass-color">Include Uppercase Letters</span>
            </label>
            
            <label className="mt-[17px] flex">
              <input type="checkbox" 
                checked={includeLowercaseLetters}
                onChange={() => setIncludeLowercaseLetters(!includeLowercaseLetters)}/>
              <span className="ml-[20px] font-jetbrain font-bold text-16px text-pass-color">Include Lowercase Letters</span>
            </label>

            <label className="ml-[0] mt-[17px] flex">
              <input type="checkbox" 
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)} />
              <span className="ml-[20px] font-jetbrain font-bold text-16px text-pass-color">Include Numbers</span>
            </label>

            <label className=" ml-[0] mt-[17px] flex">
              <input type="checkbox" 
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)} />
              <span className=" ml-[20px] font-jetbrain font-bold text-16px text-pass-color">Include Symbols</span>
            </label>
          </div>

          <div className=" w-full h-[56px] mt-[32px] bg-slider-bg flex justify-between items-center px-[16px]">
            <span className=" font-jetbrain text-16px font-bold text-title-grey">STRENGTH</span>
            <div className=" w-[145px] h-[28px] flex items-center">
              <span className=' font-jetbrain text-18px font-bold text-pass-color'>MEDIUM</span>
              <div className=" w-[64px] flex justify-between ml-[16px]">
                <div className=" w-[10px] h-[28px] border-[2px] border-pass-color"></div>
                <div className=" w-[10px] h-[28px] border-[2px] border-pass-color"></div>
                <div className=" w-[10px] h-[28px] border-[2px] border-pass-color"></div>
                <div className=" w-[10px] h-[28px] border-[2px] border-pass-color"></div>
              </div>
            </div>
          </div>

          <button className='w-[311px] h-[56px] bg-neon-green mt-[16px] flex items-center justify-center' onClick={randomGenerator}>
            GENERATE <img src='.././public/images/bx_arrow-to-left.svg' alt="copy" className='ml-[16px]' /></button>

        </div>
      </div>
    </div>
  </>
  );
  }

  export default App;
