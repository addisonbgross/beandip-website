import Image from 'next/image';
import Link from 'next/link';

import BlogPost from '../../components/blog-post/blog-post';
import BlogImage from '../../components/blog-image/blog-image';

export default function BlogPost_GameOn() {
  return (
    <BlogPost
      title="Game On"
      date="September 7th, 2022"
      content={
        <>
          <p>
            Hey there! Welcome to beandip games 🙂. We’re an independent game
            studio located in beautiful British Columbia, Canada. We’re working
            on our first game, currently untitled. Our project has been stewing
            for a few years, and we’ve recently taken a leap to work on it full
            time. Our goal with this blog is to share project updates, as well
            as our challenges and triumphs, during the development process.
          </p>

          <BlogImage
            image="/images/hill-forest.png"
            imageBlur="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCACJAIkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCxSUZpM11HKLSUZpM0gFNNNKTTSaQwNMNKTTSaRQ00xqcTTGNIYxqiapGNRMaRRE1RNUjGomNIZE1RNUjGomNBQ00lITSZoGdhmkzTc0ZrS5zWHZozTM0ZouOwuaQmkzTSaVxik00mkJppNK4wJqNjSk1GTSGIxqJjTmNRMaQxrGoWNPZqhZqRQxjUTGldqhZqCkKWpN1Rl6TfRcdjsc0ZpmaTNO5hYkzSZpm6kLUXCw8tTS1NLU0tRcdhxamlqaWphalcLDi1Rs1IzVGzUXGKzVEzUM1Qs1K5QM1Qu1DtUDvSuNA71XeSmySVAWyam9y9h5cmk3H1plFMLnbZozUeaM1PMZWH7qQtTM0hNPmCw4tTS1NLU0tRzBYcWphamlqYWo5h2HM1Rs1IzVEzUuYLCs1Qu9DvUDvScirA71VlkpZHquxyaFdj2AnJpKSirEFFFFAHYZozTaK57iFzTSaDTTRzAKTTCaCaaTRzAITTGalJqNjRzAIzVCzU5jUTGp5rjGu1QO1SOarSnirihkTtk02ikrcQUUUUAFFFFAHXUUuKMVzWENNNNPIppFFgGGmGpCKYRSsBG1RNUzCo2FS0FyFqiapmFRMKEMheq0vSrTioJBW0WFytSUpGDSVsAUUUUAFFFFAHY4oxT8UmKxsZ3GEU0ipCKQiiwXIiKaRUpFMIosO5CRTGFTEUxhSsFyuwqJhVhhUbCpcR3KzCoXFWWWoWFC0ApyLUdWnWq7rg1vFjTGUUUVQwooooA7bFGKdSYqbGI0imkU8ikIosBGRTCKlIphFKwyMioyKlIphosBCwqNhUzCo2FKwyBhULirDComFS0MrOKgdatOKhcULQCoRg0lSuKjrVFISiiimM7mkpaSkYCGkNKaQ0DGmmGnmmmgCM0w1IajNIBjVE1StUbUDImqJqlaompDIWqFxU71A9SxkDioT1qd6hbrVxGhtFFFUUf//Z"
            alt="long shadows on a hill"
          />

          <p>
            Our game is a small-scale, real-time strategy adventure. We aim to
            create a unique gaming experience, deriving inspiration from a
            variety of game types including colony simulators and old school
            real-time strategy.
          </p>

          <BlogImage
            image="/images/hill-run.png"
            imageBlur="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCACJAIkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDq6Wkpa6jiCiiigAooooGFJS0lIBpppp5ppoGMNMNPNNNAEZphqQ0w0AMNNNONNNACUUUUAalFJS0risLRSUtFx2FooopXHYKSloouFhpppp5ppouOww0w1IaYaVwsRmozUhphouFhhphp5phouFhKKKKLhY0qWm0uam4WHUtNBpRRcdh1LSClpXCwUUUUXHYQ00040houFhhqM1IaY1K47EZqNqkao2ouFhhphp5phouKw2iiii4WNDNLmmZpQai47DwacDUYNOBouFh4NOFMBpwNFx2HUUmaM0XCwUhozSE0XHYaaY1OJpjGlcLDGqNqexqJjRcLDTTCaVjTCaLhYM0maTNGaLhYvZpQajzSg1FwJAacDUQNOBouMlBpwNRA04Gi4EmaXNR5pc07gOzTSaTNNJouMUmo2NKTUbGlcBGNRsaVjUbGi4CMaYTQxphNK4Ck0maaTSZouBdzS5qLdS7qQiUNTg1QhqcGoAmDU4NUAanbqYybdRuqLdRuoAl3U0tUe6kLUAPLVGzU0tTC1AxWamM1IzVGzUgFZqjJpC1MLUAOzRuqPdRupAXN1LuqLNLmqJJd1KGqLdRuoAmDU7dUG6l3UATbqN1Q7qN1AyYtTS1RbqQtTAkLUwtTC1MLUgHFqYWppamFqAHFqYWppamlqQDt1G6o91G6iwF3NGabmjNXYkfmjNMzRmiwEm6jdUeaM0WAk3Um6o80ZoGPLUhaoy1IWoAeWphamlqaWoAcWphamk00miwDi1NJppNNJpWAfmkzTM0ZosBoUUUVRIUZoooAM0maKKAEzSZpaSgYhNITSmmmgBCaaTSmmmgBCaaTSmmmgBCabmlNJQMM0lFFAH//2Q=="
            alt="an archer runs along a ridge"
          />

          <p>
            Follow us on{' '}
            <Link
              href="https://www.instagram.com/beandipgames/"
              passHref={true}
            >
              <a target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Link>{' '}
            and{' '}
            <Link href="https://twitter.com/beandipgames/" passHref={true}>
              <a target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Link>{' '}
            for more! Welcome to the party, pal.
          </p>
        </>
      }
    ></BlogPost>
  );
}
