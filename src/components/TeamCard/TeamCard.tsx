
'use client'
import { useState } from "react";
import styles from "./styles.module.scss";

interface FormData {
  [key: string]: string;
}

export default function TeamCard() {
  const [formData, setFormData] = useState<FormData>({
    GL: "",
    LD: "",
    ZAG1: "",
    ZAG2: "",
    LE: "",
    VOL: "",
    MC: "",
    MD: "",
    ME: "",
    ATA1: "",
    ATA2: "",
  });

  const [showInputs, setShowInputs] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData({
      GL: "",
      LD: "",
      ZAG1: "",
      ZAG2: "",
      LE: "",
      VOL: "",
      MC: "",
      MD: "",
      ME: "",
      ATA1: "",
      ATA2: "",
    });
  };

  const handleEscalar = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowInputs(false);
  };

  return (
    <div className={styles.card}>
      <form className={styles.form}>
        {showInputs && (
          <>
            <div className={styles.cardSections}>
              <label htmlFor="GL" className={styles.label}>
                1 - GL:
              </label>
              <input
                className={styles.input}
                type="text"
                id="GL"
                name="GL"
                value={formData.GL}
                onChange={handleChange}
              />
            </div>

            <div className={styles.cardSections}>
              <label htmlFor="LD" className={styles.label}>
                2 - LD:
              </label>
              <input
                className={styles.input}
                type="text"
                id="LD"
                name="LD"
                value={formData.LD}
                onChange={handleChange}
              />
            </div>

            <div className={styles.cardSections}>
              <label htmlFor="ZAG1" className={styles.label}>
                3 - ZAG:
              </label>
              <input
                className={styles.input}
                type="text"
                id="ZAG1"
                name="ZAG1"
                value={formData.ZAG1}
                onChange={handleChange}
              />
            </div>

            <div className={styles.cardSections}>
              <label htmlFor="ZAG2" className={styles.label}>
                4 - ZAG:
              </label>
              <input
                className={styles.input}
                type="text"
                id="ZAG2"
                name="ZAG2"
                value={formData.ZAG2}
                onChange={handleChange}
              />
            </div>

            <div className={styles.cardSections}>
              <label htmlFor="LE" className={styles.label}>
                6 - LE:
              </label>
              <input
                className={styles.input}
                type="text"
                id="LE"
                name="LE"
                value={formData.LE}
                onChange={handleChange}
              />
            </div>

            <div className={styles.cardSections}>
              <label htmlFor="VOL" className={styles.label}>
                5 - VOL:
              </label>
              <input
                className={styles.input}
                type="text"
                id="VOL"
                name="VOL"
                value={formData.VOL}
                onChange={handleChange}
              />
            </div>

            <div className={styles.cardSections}>
              <label htmlFor="MC" className={styles.label}>
                8 - MC:
              </label>
              <input
                className={styles.input}
                type="text"
                id="MC"
                name="MC"
                value={formData.MC}
                onChange={handleChange}
              />
            </div>

            <div className={styles.cardSections}>
              <label htmlFor="MD" className={styles.label}>
                10 - MD:
              </label>
              <input
                className={styles.input}
                type="text"
                id="MD"
                name="MD"
                value={formData.MD}
                onChange={handleChange}
              />
            </div>

            <div className={styles.cardSections}>
              <label htmlFor="ME" className={styles.label}>
                11 - ME:
              </label>
              <input
                className={styles.input}
                type="text"
                id="ME"
                name="ME"
                value={formData.ME}
                onChange={handleChange}
              />
            </div>

            <div className={styles.cardSections}>
              <label htmlFor="ATA1" className={styles.label}>
                7 - ATA:
              </label>
              <input
                className={styles.input}
                type="text"
                id="ATA1"
                name="ATA1"
                value={formData.ATA1}
                onChange={handleChange}
              />
            </div>

            <div className={styles.cardSections}>
              <label htmlFor="ATA2" className={styles.label}>
                9 - ATA:
              </label>
              <input
                className={styles.input}
                type="text"
                id="ATA2"
                name="ATA2"
                value={formData.ATA2}
                onChange={handleChange}
              />
            </div>
          </>
        )}

      {!showInputs && (
          <>
            {Object.entries(formData).map(([key, value], index) => (
              <div key={key} className={styles.cardSections}>
                <label className={styles.inputName}> {index + 1} - {key}: </label>
                <span className={styles.value}>{value}</span>
              </div>
            ))}
          </>
        )}
      </form>

      <div className={styles.btnSection}>
        {showInputs ? (
          <>
            <button
              className={styles.btn1}
              type="button"
              onClick={handleClear}
            >
              Limpar
            </button>
            <button
              className={styles.btn}
              type="button"
              onClick={handleEscalar}
            >
              Escalar
            </button>
          </>
        ) : (
          <>
            <button
              className={styles.btn1}
              type="button"
              onClick={() => setShowInputs(true)}
            >
              Editar
            </button>
            <button
              className={styles.btn}
              type="button"
              onClick={handleEscalar}
            >
              Escalar
            </button>
          </>
        )}
      </div>
    </div>
  );
}