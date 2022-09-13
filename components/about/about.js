import Image from 'next/image';

import styles from '../../styles/About.module.css';

const About = () => (
  <div>
    <p className={styles.summary}>
      beandip is a Canadian game studio that makes excellent games for playing
      and enjoying. They involve clicking and keypresses to create an immersive,
      fun experience.
    </p>

    <div className={styles.employees}>
      <div className={styles.descriptionContainer}>
        <Image
          src="/images/a.png"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCACJAIkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDv6KKKkAooooAKKKSpGFJS0lIQlBopKkQUhopDUkiGmmlNNNACGkpTTaAFpKKKALtFFFbFhRRSUgCiikpAFJRRSEFJRSE1JIGmk0E0wmkAE0hNITTSaAFJpM0hNNzQA7NGabmjNAGhmjNJmjNaFXFzSUmaM0XC4tJmkzRmkK4UlBNNJpCuKTTSaQmmFqQhxNMJpC1MLUDHE00mmlqaWoAeTSZpham7qAJM0ZqPdRuoA1M0Zpm6jdTFcfmkzTN1IWoAfmkLUwtTS1ADy1NLUwtTS1ADi1NLUwtTS1AxxamlqYWppagB5amlqjLU0tQBIWpN1RlqTdQMk3Ubqi3UbqANbdRuqHdRupkku6kLVFupC1AEhamlqYWppagB5amlqjLU0tQBIWphaoy1NLUDHlqaWqMvTS9Ax5amlqjL00vQBKWpN1Ql6TfTAm3Ubqg30b6Bmvuo3VDuo3UEEu6kLVFupC1AEhamlqjLU0tQBIWppaoy1MLUDJC9ML1GXppemA8vTS9Rl6YXosMkL00vURemF6LDJi9JvqAvSF6LAT76N9V99G+nYZtbqN1RbqTdSMyXdSFqi3UhagCQtTS1RlqaWoAeWppaoy1NLUxjy9ML0wtUZagZIXqMvTC9Rlqdhkheml6iL0wvRYZMXppeoC9NL07DLG+jfVbfRvosFjod1JupmaM1JkO3Uhamk00mgBxamlqQmmE0DFLUwtSE0wmmApao2agmo2amMVmqNmpGao2amUKzUwvTWao2anYY8vTC9RlqYXp2KsTb6N9V99G+nYdjq6KKSsTnAmmmlNIaAGmmk040w0xjSaYTTjTDQMYxqNjUjVG1UMjY1Gxp7VG1MZGxqNjT2qNqaKRGxphNOaozVotATSZpDSUxn//Z"
          width="512"
          height="512"
          layout="intrinsic"
          alt="a"
        />
        <p className={styles.name}>Addison</p>
        <p>Software Development</p>
      </div>

      <div className={styles.descriptionContainer}>
        <Image
          src="/images/h.png"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCACJAIkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDv6KKKgAoopKQBSUtJSAQ0hpTSUiWIaY1PNRtSJGmozTzTDQAw0w080w0xjTTTTjTTTASiiigDaooopmgUlFFAhKKKSkIKSikNSSxDUZpxNMY0CGk0w0pNMJpgNJppNKTTCaBiE0hNBNNJpgLmim5ozQBuUUUlBYtJRSUCCiikpCEpCaCaYTSJAmoyaUmo2NACMaYTSk1GTTGITTSaCaYTTACaQmmk00mgY/NJmmZozQB0NFJRUjCikooEFITSE00mkICaYTQTTCaYCMajY0rGo2NAAxqMmgmmM1MYE0wmkJphamApNNJppamlqYD80ZqPdRuoGdNRmmZozWYh2aaTSE00mgBSaaTSE0wmmApNRk0E0wmgBGamMaGNRsaYAxqNjQxqNmpjBmphakZqjLUwHFqaWphamlqBkm6k3VHupN1MDqs0ZpmaM1kIcTTSaaTSE0wFJphNITTCaAFJqNjQTTGNMBGNRsaGNRsaYwZqiZqVmqJmpgDNUZahmqNmpjFLU0tTC1NLUASbqTdUW6jdTA67NGabmkzWQhxNNJpCaaTQAE0wmlJphNMBGNRsaVjUbGgYjGomNOY1ExpgIxqJjSsaiY0xiM1Rs1DGo2aqAUtTC1NLUwtTHYfuo3VFuo3UBY7TNJmkpKxJFJppNBppNAATUZNONMNMBrGo2NOao2NMYxjUTGnsaiY0wGMaiY09jUTGmMYxqJjTmNRMaYxGNMLUMajJqhji1JuphNJmmB3VFFFc5mNNNNONNNADTTDTzTDTAjao2qRqjamMiaomqVqiamMiaoWqZqhamBE1RNUrVC1UURtUZNPamGmMaaTNBopjP//Z"
          width="512"
          height="512"
          layout="intrinsic"
          alt="h"
        />
        <p className={styles.name}>Hollie</p>
        <p>Modelling & Animation</p>
      </div>
    </div>
  </div>
);

export default About;
