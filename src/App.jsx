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
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const customRangeStyle = {
    width: '100%',
    height: '8px',
    appearance: 'none',
    background: 'green', // Set the background color to green
    outline: 'none',
  };
  
  const customRangeTrackStyle = {
    height: '8px',
    background: 'lightgray', // Track color
    position: 'relative',
    width: '100%',
  };
  
  const customRangeThumbStyle = {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: 'white', // Thumb color
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const handleRangeChange = (event) => {
    const newValue = event.target.value;
    setRangeValue(newValue);
  };

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
    const backgroundColor = `rgb(0, ${255 - (newValue * 12)}, 0)`;
    customRangeStyle.background = backgroundColor;
  };

  let strength = "";
  let bgcolors = 0;

  if (sliderValue > 16) {
    strength = "STRONG";
    bgcolors = "#A4FFAF";
  } else if (sliderValue > 12) {
    strength = "MEDIUM";
    bgcolors = "#F8CD65";
  } else if (sliderValue > 7) {
    strength = "WEAK";
    bgcolors = "#FB7C58";
  } else {
    strength = "TOO WEAK";
    bgcolors = "#F64A4A";
  }

  let randomGenerator = () => {

      const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '1234567890';
      const specialSymbols = '!@#$%^&*';

      let selectedCharacters = '';
      let result = '';
      const length = sliderValue;

      if (!includeUppercaseLetters && !includeLowercaseLetters && !includeNumbers && !includeSymbols) {

        selectedCharacters = uppercaseLetters + lowercaseLetters + numbers + specialSymbols;
      }

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


      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * selectedCharacters.length);
        result += selectedCharacters[randomIndex];
      }

      setRandomValue(result);
    };

    const getDivs = (bgcolors) => {
      if (bgcolors === '#A4FFAF') {
        return (
          <>
            <div className=" w-[10px] h-[28px]" style={{ backgroundColor: bgcolors }}></div>
            <div className=" w-[10px] h-[28px]" style={{ backgroundColor: bgcolors }}></div>
            <div className=" w-[10px] h-[28px]" style={{ backgroundColor: bgcolors }}></div>
            <div className=" w-[10px] h-[28px]" style={{ backgroundColor: bgcolors }}></div>
          </>
        );
      } else if (bgcolors ==='#F8CD65') {
        return (
          <>
            <div className=" w-[10px] h-[28px]" style={{ backgroundColor: bgcolors }}></div>
            <div className=" w-[10px] h-[28px]" style={{ backgroundColor: bgcolors }}></div>
            <div className=" w-[10px] h-[28px]" style={{ backgroundColor: bgcolors }}></div>
            <div className=" w-[10px] h-[28px] border-[2px] border-title-grey"></div>
          </>
        );
      } else if (bgcolors === '#FB7C58') {
        return (
          <>
            <div className=" w-[10px] h-[28px]" style={{ backgroundColor: bgcolors }}></div>
            <div className=" w-[10px] h-[28px]" style={{ backgroundColor: bgcolors }}></div>
            <div className=" w-[10px] h-[28px] border-[2px] border-title-grey"></div>
            <div className=" w-[10px] h-[28px] border-[2px] border-title-grey"></div>
          </>
        );
      } else {
        return (
          <>
            <div className=" w-[10px] h-[28px]" style={{ backgroundColor: bgcolors }}></div>
            <div className=" w-[10px] h-[28px] border-[2px] border-title-grey"></div>
            <div className=" w-[10px] h-[28px] border-[2px] border-title-grey"></div>
            <div className=" w-[10px] h-[28px] border-[2px] border-title-grey"></div>
          </>
        );
      }
    }

    const copyToClipboard = () => {
      if (randomValue) {
        navigator.clipboard.writeText(randomValue)
          .then(() => {
            setIsCopied(true);
          })
      }
    };


  return (
  <>
    <div className="w-screen h-screen bg-gradient-to-r from-bg-blackOne to-bg-blackTwo flex flex-col justify-center">
      <div className=" w-[343px] h-auto mx-auto sm:w-[540px]">
        <h1 className="text-title-grey text-center font-jetbrain text-base font-bold sm:text-pass">
          Password Generator
        </h1>
  
        <div
          className="w-full h-[64px] bg-div-bg mt-[16px] pl-[16px] pr-[15.5px] flex items-center justify-between sm:mt-[31px] sm:pl-[32px] sm:pr-[32px] overflow-auto">
          <p className=" font-jetbrain font-bold text-pass text-pass-color sm:text-32px">
            {randomValue}
          </p>
          <div className='flex'>
            {isCopied && (
                <p className="font-jetbrain mr-[16px] text-neon-green text-18px">
                  COPIED
                </p>
              )}
            <img src="./images/icon-copy.svg" alt="Copy" onClick={copyToClipboard}/> 
          </div>
        </div>
        <div className="w-full h-auto bg-div-bg p-[16px] mt-[16px] sm:mt-[24px] sm:pl-[32px] sm:pr-[32px] sm:pt-[34px] sm:pb-[32px]">
          <div className="w-auto flex items-center justify-between">
            <span className="font-jetbrain font-bold text-pass-color leading-normal sm:text-18px">
              Character Length
            </span>
            <p className="font-jetbrain font-bold text-pass text-neon-green sm:text-32px">
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
              className="range w-full h-[8px] outline-none border-none"
            />

          <div className='flex flex-col mt-[42px]'>
            <label className="flex items-center">
              <input type="checkbox"
              checked={includeUppercaseLetters}
              onChange={() => setIncludeUppercaseLetters(!includeUppercaseLetters)} />
              <span className="ml-[20px] font-jetbrain font-bold text-16px text-pass-color sm:text-18px">Include Uppercase Letters</span>
            </label>
            
            <label className="mt-[17px] flex">
              <input type="checkbox" 
                checked={includeLowercaseLetters}
                onChange={() => setIncludeLowercaseLetters(!includeLowercaseLetters)}/>
              <span className="ml-[20px] font-jetbrain font-bold text-16px text-pass-color sm:text-18px">Include Lowercase Letters</span>
            </label>

            <label className="ml-[0] mt-[17px] flex">
              <input type="checkbox" 
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)} />
              <span className="ml-[20px] font-jetbrain font-bold text-16px text-pass-color sm:text-18px">Include Numbers</span>
            </label>

            <label className=" ml-[0] mt-[17px] flex">
              <input type="checkbox" 
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)} />
              <span className=" ml-[20px] font-jetbrain font-bold text-16px text-pass-color sm:text-18px">Include Symbols</span>
            </label>
          </div>

          <div className=" w-full h-[56px] mt-[32px] bg-slider-bg flex justify-between items-center px-[16px]">
            <span className=" font-jetbrain text-16px font-bold text-title-grey sm:text-18px">STRENGTH</span>
            <div className=" w-auto h-[28px] flex items-center">
              <span className=' font-jetbrain text-18px font-bold text-pass-color sm:text-pass'>{strength}</span>
              <div className=" w-[64px] flex justify-between ml-[16px]">
              {getDivs(bgcolors)}
              </div>
            </div>
          </div>

          <button className='w-full h-[56px] bg-neon-green mt-[16px] flex items-center justify-center text-16px text-div-bg sm:text-18px' onClick={randomGenerator}>
            GENERATE <img src="./images/bx_arrow-to-left.svg" alt="arrow" className='ml-[16px]' /></button>

        </div>
      </div>
    </div>
  </>
  );
  }

  export default App;
