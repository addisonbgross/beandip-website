import Link from 'next/link';

import BlogPost from '../../components/blog-post/blog-post';
import BlogImage from '../../components/blog-image/blog-image';
import styles from '../../components/blog-post/blogPost.module.css';

export default function BlogPost_PrestigeWorldwide() {
  return (
    <BlogPost
      title="Prestige Worldwide"
      date="September 14th, 2022"
      content={
        <>
          <p>
            “So, what’s your game about?” Until now, we’ve only had awkward and
            ambiguous answers to this question, so last week we started writing
            an{' '}
            <Link
              href="https://en.wikipedia.org/wiki/Elevator_pitch"
              passHref={true}
            >
              <a target="_blank" rel="noopener noreferrer">
                elevator pitch
              </a>
            </Link>
            . In short, an elevator pitch is a concise explanation of what your
            game is about and why anyone would want to play it.
          </p>

          <p>
            Having a solid elevator pitch can help reduce the number of awkward
            encounters we may face throughout the process of developing a game.
            It will also better prepare us for when someone asks what the vision
            for our game is and be useful when we start looking for a publisher
            and marketing our game.
          </p>

          <BlogImage
            image="/images/money-please.png"
            imageBlur="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAG1AzYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmqKKKg6AooooAKWkpaAClpKWkAUtJS0ALRSUtAC0UUUALRRRQAtFFFAC0UUUALRRRQAtFFFAC0UUUAFFFFAC0UlLQIKKKKACiiigAooooAKSlpKACiiigAooooASiiigQlJS0lABSUtJQAUlLSUwEpKWkoEJRRRQA2iiigBDTTS0lAhKSlpKAGmkNKaQ0ANNIaU0hpiG0lLSUxMSiiimSFFFFABRRRQAUUUUAFFFFABRRRQAUUUUALS0lLSKQUtJS0DFFLSClpDFFOpop1AC0tJS0AFLSUtAxaKKKAFooooAWiiigApaSigBaKKKACiiigBtLSUUixaKKKAClpKWgApaSlpAFLSUtABS0lLQAUtJS0ALRSUtAC0UUUALRRRQAtFFFAC0UlLQAUtJS0AFFFFABS0lFAhaKKKACiiigAooooAKSiigAooooAKSlpKACiikoEFJS0lABSUtJQAUlFFMBKSlpKBCUhpaSgBKSlpKAEpDSmkNAhKQ0ppDQA00hpTSGgBppDSmmmmISkpaSmJiUUUUyQooooAKKKKACiiigAooooAKKKKACiiigBaWkopDQtLSUtBQopaQUtIYopaSloAdS02loAWlpKWgYtFFFAC0UUUALRRRQAUUUUALRRRQAUUUUANooopFhS0lLQAUUUUALRRRQAtFFFAC0UUUgFpaSigBaWkpaAClpKWgBaKSloAKWkpaAClpKKAFooooELRSUtABRRRQAUtJRQAtFJRQAtJRRQAUUUUAFFFFACUUUUCCkoooAKSiigApKKKAEpKWkpgFJS0lAhKSlpKAEpKWkoAQ0lKaSgQlNNOppoAQ0hpTTTQAhpppxpppiEpKWkpiYlFFFMkKKKKACiiigAooooAKKKKACiiigAooooAWiiigaFpRSUopFC0tJS0hi0tJS0ALS0lLQAtLSUtABS0lLQMWikpaAClpKWgAooooAKWkooAWikopAJRSUtBYUUUUALRSUtABS0lLQAUtJS0AFLSUtAC0UlLSELS0lFAC0tJRQAtLSUUALRRRQAtFJS0ALRSUtABRRRQAtFJS0AFFFFABRRRQAUUUUAFFJRQAUUUUAFFFJQIKKKSgAoopKACkpaSmAUlFFAhKKKSgApKKSgApKWkNACUlFJQIQ0hpTSGgBDTTSmkNMQhpppTSGgBKSiimSxKKKKYgooooAKKKKACiiigAooooAKKKKACiiigApaSloGhaKKBSKHUoptOpDFFLSCloAWlpKWgBaKKKAFpaSigBaWkooAWiiigYtFJS0AFFFFABRRRQA2iiikWFLSUUALS0lFAC0UlLQAtFJS0CFpaSigBaWkooAWlpKKAFpaSikAtLSUUALS0lFAC0tJRQAtFFFAC0UlFAC0UUUAFFFFABRRRQAUUUUAFFFFABRSUUCCiikoAKKKKACkoopgJRRSUAFFFJQIKSiigBKSlpKAEpDS0lAhKSlpDQAhpDRSUAIaQ0ppDQIaaQ0ppppgJSUtJVEsKKKKBBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0lLQAUtJS0ikLS0lKKQxadTaWgY6lptLQAtLSUtAC0UlLQAtFFFAC0UlLQAUUUUAFLSUUALRSUUAJRSUUjQWikooAWlpKKBC0tJRQAtFFFAC0UUUALS0lFAC0tJRQAtLSUtAC0UlLQAtFJRSAWlpKKAFopKWgBaKSigBaKSloAKKKKACiiigAooooEFFFFABRSUUAFFFFABSUUUwCkoooAKSiigQlFFJQAUlFFACUUUlACUUUlAgpppTSUAJSGlpDQIQ000ppDTAQ000ppDTEJSUtJTJCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWlpKKRSHUtJSikMWlpKWgBaWkpaAFopKWgYtLSUUALS0lFAC0UUUALRSUUALRRRQAUUUUAMooopFi0UlFAC0tJRQAtLTaWgBaWkooAWlpKKAFpaSigBaWkooAWlpKKAFpaSigBaWkooAWlpKKAFopKWkAUtJRQAtFJS0CCiiigAooopgFFFFABRRSUgFopKKACiikpgLSUUUAFJRRQIKSiigApKKSgApKWkoAKSikoEFJRSGgApKKSgANNNKaSgQhpppxpppgIaQ0ppppiEooopkhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFLSUtAxaWkpaQxadTaWkMWlpKWgBaWkooAWlpKKAHUUlFAxaWkooAWikpaACiiigAooooAZRRRSLFopKKAFooooAWikpaAFpabS0ALS02loELS0lFAC0tJRQAtLSUUALS0lFAC0tJRQAtFJS0ALRSUUALS0lFAC0UlFAC0UlFAC0UlFAC0UlFAC0UlFAC0lFFABRSUUAFFFJQIWkoooAKSikoAKKKSgApKKKBCUUUlABSUUlABSGikoEJSUtJQAhpDSmm0xCGkpTSUxCUUUUxBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFLSUUAOpaaKWkMdS02lpDHUUlLQMWlpKWgBaKSloAWikpaAClpKKAFooooAKKKKACiiigBlFJS0jQKWkooAWikpaBC0UlLQAtFJS0ALRSUtAC0tNpaAFpabS0ALS02loAWlptLQAtFJS0ALRSUUALS0lFAC0UlLQAUtJRQAtFJRQAtFJRQAtFJRQAtJRRQAUUUlAhaKSigAoopKACiikoAKKKSgAoopKBBSUUUAJSUtJQAUlFJQIKSikoADTTS0lAhKQ0tNNMBDSUppKokKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFpaSikA6lptLSGOpabS0DFpaSloAWikpaAFopKWgYUtJRQAtFJS0AFFFFABRRRQAyikooLFopKKAFpaSigBaWkooAWlpKKQC0tJRQA6ikooAdRSUtAhaKSloAWikpaAFopKKAFpaSigBaKSigB1FJRQAtFJRQAtFJRQAtFFFABRRRQAUUlFAC0UlFABRRSUALSUUUAFFJRQIKSiigApKKKACkopKACkpaSgQUlFJQAUlFJQAlIaWkpiENIaDSUxBSUUUxBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAtFFFAC0tNpaQDqKSlpDFpaSigB1FJS0DFopKKAFpaSigBaKSlpAFFFFABRRRQBHRSUtM0ClpKKAFopKKAHUUlFADqKSloELS02loAWlptLQAtLTaWgBaWm0tAC0tNpaAFopKWkAtFJRQAtLSUUALRSUUALS0lFAC0UlFAC0UlFAC0UlFAC0lFFABRRSUALRSUUCCikooAKKKSgBaSikoAWkopKACiikoEFJRSUAFJS0lACUlLSGmIQ0lLTTQIKSg0UxCUUUUwCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSloAKWkopCFpaSloGLS02lpALS0lFAxaWkooAWikpaAFopKKBi0UlFAC0UUUgI6KSimWLRSUUALS0lFAC0tNpaAFpabS0ALS02loAWlpKKAHUUlFADqKSigB1FJRQAtLSUUCFpabS0ALRSUUALS02loAWikooAWikooAWikopALRSUUALRSUUALRSUUAFFFJTAWkoopAFFJRTAKKSigQUUlFABSUUUAFJRSUAFJRSUCA0lFJQAUlFJTJCkpaSmAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABS0lLQAUUUUCFopKWkAtFJS0ALRSUtIYtFJRQA6ikooAWiiigYtFJRQAtFJRQAyikopli0UlFAC0UUUAFLSUUALS0lFADqKSigB1FJRSAdRSUtAC0UlLQAtFJS0ALRSUUAOopKKAFpabS0ALRSUUALRSUUALRRRQAUUUUAFFFFABRRRQAUUlFAC0UlFAgopKKACiikoAWkopKAFpKKSgBaSikoAKSiigQlFFJQAUlFJTEFJRRTEJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAtFFFABS0lFIQtFFFABS0lFAC0tJRSAWikpaAFopKKAFopKKBi0UlFADaKSimULRRRQAUUUUDClpKKAFopKWgYtFJS0ALRSUtAC0tNpaAFpabS0ALS02lpALRSUtAC0UlFADqKSigBaKSloAWikooELRSUUALRSUUALRSUUALRSUUALSUUUAFFFJQAtJRRQAUUlFABRSUUAFFJRQIKSiigApKKSgApKKSgQUlLSUxBSUtJTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpKWgAooooEFLSUtIAooooAKWkooAWikpaBBRRRQAUUUUgCiiigBtFFFUWFFFFABRRRQAtFJRSGLRSUtABS0lFMYtLSUUgFpaSigBaWkooAdRSUUAOopKKAFpaSikAtFJS0AFLSUUALRSUUALRRRQAUUUUAFFFFABRRRQAUUlFAC0UlFAgoopKAFpKKSgBaSiigApKKKACkopKBBSUUUAFJRSUxBRRRTASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFooooAKKKKBC0UlLSAKKKKACiiigApaSigBaKSigQtFJRQA2iiimUFFFFABS0lFAC0UlLQMKKKKAFopKKBi0tJRQAtLTaWgYtLTaWkAtFJS0ALRSUtAC0UlLQAtFJRQAtFFFAC0UlFIBaKSigQtFJS0AFFFFABRSUUALRSUUAFFFFABRSUUAFFFJQAtJRSUAFFFJQIKKKSmAUlFFAhKKKKYBSUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFLSUUALRRRQAUUUUCFopKKQC0UUUAFFFFABRRRQAUUUUANooopjCiiigAooooAKKKKAFopKWgAooooGFLSUUDFooooAWikpaAFopKWgBaKSlpALRSUtABS0lFAC0UUUAFLSUUALRSUUgFooooAKKKKACiikoAWikooAKKKKACkoooEFFFJQAUUUlABRRSUwCkpaSgQUlFFAgoopKYwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFopKWgAooooAKKKKBBS0lFIBaKSigBaKKKACiiigBtFFFMYUUUUAFFFFABRRRQAUUUtABRRRQMKKKKAClpKWgYUtJRQAtLSUUALRRRQAtFJS0gFopKKAFooooAWikpaACiiigAooooAKKKKQgooooAKKKKACkoooAKKKSgAooooAKSiimISiiigBKKKSgQUUUUwCkpaSgYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAtFJS0AFFFFABRRRQIKKKKACiiikAUUUUAJRRRTGFFFFABRRRQAUUUUAFLSUtABRRRQMKKKKACiiloGFFFFAC0UUUALRSUtABS0lLSAKKKKAFooooAKWkooELRRRQAUUUUgCiiigAoopKACiiigAooooAKSlpKACiikoEFFFFMBKSlpKACkpaSgQUUUUxhSUtJQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUALRSUtABRRRQAUUUUAFFFFAgooooASiiigYUUUUAFFFFABRS0UAFFFFABRRRQMKKKKACloooGFFFFABS0UUALRRRQAUtJS0gCiiigBaKKKACiiigQUtFFIAooooAKKKKACkpaKAEopaSgAooooASiiigQUlLSUwCkpaSgApKWkoEFJS0lABRRRTGJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFLSUUALRRRQAUUUUAFFFFABRRRQAlLRRQAUUUUAFFFFAwooooAKKKKACiiloASloooGFFFFABRRS0AFFFFAC0UUUAFLRRSAKWkpaACiiigBaKKKBBRRRSAKKKKACiiigAooooAKKKKAEopaSgApKWkoEFFFFACUUUUwEpKWigQlJS0UAJRRRTAKSlpKBhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFLSUtABRRRQAUUUUAFFFFABRRRQMKKKKACiiloASilooGFFFFABRRRQAUUUUAFFLRQMKKKKAClpKWgApaKKBBRRS0gCiiigApaKKACiiikAUUUUCCilooASilooASiiigAooooAKSlooASiiigQlFLSUAFJS0lMBKKWkoASiiigQlFFFMApKWkoGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUALRRRQAUUUUAFFFFAC0UUUFBRRRQAUUUUAFFFFABRRRQAUUtFAwooooAKKKKACiiloAKKKWgAooopALRRRQIKWiigAooooAKKWikAUUUUAFFFFAgooooAKKKKAEopaKAEooooAKSlooASiiigQlFFFMBKSlooASkpaSgQlFLSUwCkpaSgYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUtJS0AFFFFABRRRQAtFFFBYUUtFACUUtFACUtFFABRRRQAUUUUAFFFFAwooooAKWiigApaKKBBS0UUgCloooAKKKWgQUUUUgCiiigAopaKAEopaKAEopaKBCUUUUAFFFFABSUtFACUUUUAJRS0lABSUtJQIKSlpKYCUUtJQAlJS0lMQUlLRQMSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigB1FFFBYUUUUAFFFFABRRRQAUUUUDCiiigAooooAKKKWgAoopaACiiloAKKKWkIKKKKAFooooEFFFFIApaKKACiiigAooooAKKKKACiiigQlFLRQAlFFFABSUtFACUUUUAJRRRQISkpaKYCUlLSUAJRS0lMBKKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWiiigAooooAdRRRQWFFFFABRRRQMKKKKACiiigAooooAKKKWgAooooAKWkpaACloooAKWiikIKWkpaACiiigApaKKQgooooAKKKKACiiigAooooAKKKKBBRRRQAlFLSUAFFFFACUUUUAFJS0lACUUtJQISkpaSmAUlLSUwEooooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigB1FFFBoFFFFABRRRQAUUUUAFFFFABRRRQAtFFFAwooopgLRRRSELRRRQAtFFFIQUtFFABRRRSAWiiigQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQIKSlooASiiigApKWkoAKSlpKACkpaSmISiiigBKSlpKAEooopgJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAtFFFABRRRQA6iiig0CiiigAooooAKKKKACiiigApaKKACiiigYUUUUwFooopCFooooAWiiikIWiiigApaKKQBRRRQIKKKKACiiigAooooAKKKKACiiigAooooEFFFFACUUUUAFJRRQAUlFFABSUUUxCUUUUAJSUUUAJRRRTASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigD//Z"
            alt="Mona Lisa Saperstien needs money"
            height="200"
          />

          <p>
            Our logic when developing our elevator pitch is to try and sell the
            game concept and provide some detail about what the player will be
            doing when they play the game. There are aspects of our game that we
            do not want to reveal until the player experiences them on their
            own; however, we also want to avoid being too vague regarding the
            gameplay. So we began the writing process by making two lists: what
            we wanted to say in our pitch, and what we didn’t want to say. Next,
            we wrote a few draft versions of our pitch, refining and reworking
            it over time. And since most resources around elevator pitches
            recommend keeping the pitch short and sweet (between 30 seconds and
            2 minutes long), we’ve also been reciting our drafts aloud to see
            how long they are.
          </p>

          <p>
            We’re still working on the elevator pitch, but we{' '}
            <strong>have</strong> managed to create a{' '}
            <Link href="https://en.wikipedia.org/wiki/Log_line" passHref={true}>
              <a target="_blank" rel="noopener noreferrer">
                logline:
              </a>
            </Link>
          </p>

          <p className={styles.quote}>
            Survivors of a societal collapse must go on an epic adventure to
            find a new home. Lead the survivors through a vast wilderness and
            battle fearsome foes while uncovering the mysterious past of your
            ancestors.
          </p>

          <p>
            Our logline doesn’t focus on gameplay, but instead aims to entice
            potential players with the game’s themes and premise. Save yourself
            the awkward explanations of your game idea. Write some pitches!
          </p>
        </>
      }
    ></BlogPost>
  );
}