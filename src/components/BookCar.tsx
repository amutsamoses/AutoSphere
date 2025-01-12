import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';

import  BookCarModal  from '../components/BookCarModel';

import { IconCar, IconX } from '@tabler/icons-react';
import { IconMapPinFilled } from '@tabler/icons-react';
import { IconCalendarEvent } from '@tabler/icons-react';

import { CAR_DATA } from './CarData';

const BookCar: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  const [carType, setCarType] = useState<string>('');
  const [pickUp, setPickUp] = useState<string>('');
  const [dropOff, setDropOff] = useState<string>('');
  const [pickTime, setPickTime] = useState<string>('');
  const [dropTime, setDropTime] = useState<string>('');
  const [carImg, setCarImg] = useState<string>('');

  const openModal = (e: SyntheticEvent): void => {
    e.preventDefault();

    const errorMsg = document.querySelector('.error-message') as HTMLElement | null;

    if (!pickUp || !dropOff || !pickTime || !dropTime || !carType) {
      if (errorMsg) {
        errorMsg.style.display = 'flex';
      }
    } else {
      setModal(!modal);

      const modalDiv = document.querySelector('.booking-modal') as HTMLElement | null;
      if (modalDiv) {
        modalDiv.scroll(0, 0);
      }

      if (errorMsg) {
        errorMsg.style.display = 'none';
      }
    }
  };

  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);

  const handleCar = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    setCarType(value);
    setCarImg(value);
  };

  const handlePick = (e: ChangeEvent<HTMLSelectElement>): void => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e: ChangeEvent<HTMLSelectElement>): void => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e: ChangeEvent<HTMLInputElement>): void => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e: ChangeEvent<HTMLInputElement>): void => {
    setDropTime(e.target.value);
  };

  const hideMessage = (): void => {
    const doneMsg = document.querySelector('.booking-done') as HTMLElement | null;
    if (doneMsg) {
      doneMsg.style.display = 'none';
    }
  };

  const citiesArr = ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'];

  return (
    <section id='booking-section' className='book-section'>
      <div onClick={openModal} className={`modal-overlay ${modal ? 'active-modal' : ''}`}></div>

      <div className='container'>
        <div className='book-content'>
          <div className='book-content__box'>
            <h2>Rent your car</h2>

            <p className='error-message'>
              Fill in all the fields! <IconX width={20} height={20} />
            </p>

            <p className='booking-done'>
              Almost there! We will send you a confirmation link by email.{' '}
              <IconX width={20} height={20} onClick={hideMessage} />
            </p>

            <form className='box-form'>
              <div className='box-form__car-type'>
                <label htmlFor='select-car'>
                  <IconCar className='input-icon' /> &nbsp; Choose your preferred model <b>*</b>
                </label>
                <select id='select-car' value={carType} onChange={handleCar}>
                  <option>Choose your car</option>
                  {CAR_DATA.map((car, index) => (
                    <option key={index} value={car[0].name}>
                      {car[0].name}
                    </option>
                  ))}
                </select>
              </div>

              <div className='box-form__car-type'>
                <label htmlFor='pick-car'>
                  <IconMapPinFilled className='input-icon' /> &nbsp; Collection location <b>*</b>
                </label>
                <select id='pick-car' value={pickUp} onChange={handlePick}>
                  <option>Where are you going to get it?</option>
                  {citiesArr.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className='box-form__car-type'>
                <label htmlFor='drop-car'>
                  <IconMapPinFilled className='input-icon' /> &nbsp; Delivery location <b>*</b>
                </label>
                <select id='drop-car' value={dropOff} onChange={handleDrop}>
                  <option>Where are you going to deliver it?</option>
                  {citiesArr.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className='box-form__car-time'>
                <label htmlFor='picktime'>
                  <IconCalendarEvent className='input-icon' /> &nbsp; Collection Date <b>*</b>
                </label>
                <input id='picktime' value={pickTime} onChange={handlePickTime} type='date'></input>
              </div>

              <div className='box-form__car-time'>
                <label htmlFor='droptime'>
                  <IconCalendarEvent className='input-icon' /> &nbsp; Delivery date <b>*</b>
                </label>
                <input id='droptime' value={dropTime} onChange={handleDropTime} type='date'></input>
              </div>

              <button onClick={openModal} type='submit'>
                 Search 
              </button>
            </form>
          </div>
        </div>
      </div>

      {modal && (
        <BookCarModal
          modal={modal}
          setModal={setModal}
          carType={carType}
          pickUp={pickUp}
          dropOff={dropOff}
          pickTime={pickTime}
          dropTime={dropTime}
          carImg={carImg}
        />
      )}
    </section>
  );
};

export default BookCar;
