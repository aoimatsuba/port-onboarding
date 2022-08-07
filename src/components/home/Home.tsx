import react, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import lighthouse from '../../images/lighthouse.jpg';
import './Home.scss';
import Paper from '@mui/material/Paper';

export const Home = () => {
    const navigate = useNavigate();
    const [showRulebook, setShowRulebook] = useState(false)
    const rulebookRef = useRef<HTMLDivElement>(null)

    const executeScroll = () => { rulebookRef.current && rulebookRef.current.scrollIntoView({ behavior: 'smooth' }) }
    const handleQuizButtonClick = () => { navigate('/quiz') }
    const handleRuleBookClick = (show: boolean) => {
        setShowRulebook(show)
    }
    useEffect(() => {
        if (showRulebook) {
            executeScroll()
        }
    })

    return (
        <div className='home'>
            <div className='home__header'>
                <Button className='quiz-button' variant="contained" onClick={handleQuizButtonClick}>クイズを始める！</Button>
                <div className='home__header__container'>
                    <div className='home__header__container__title'>
                        Portへようこそ！
                    </div>
                    <Button className="rulebook-link" size="large" variant="text" startIcon={<MenuBookIcon />} onClick={() => handleRuleBookClick(true)}>ルールブックを読む</Button>
                </div>
                <img src={lighthouse} className="background-image" alt="lighthouse-image" />
            </div>
            <div className='home__body'>
                <div className='home__body__content'>
                    {showRulebook && <Paper className="expandable-rule-card" elevation={3} ref={rulebookRef} >
                        <div className="rule-text">
                            <ul>
                                <li>セクシュアリティ、トランスジェンダー、ノンバイナリー、クィア、障がい、病気、宗教、人種、年齢、身体的特徴などを理由にした、特定の個人やグループを排除するような嫌がらせや差別行為をしない。</li>
                                <li>他のメンバーのプライバシーに関することを Twitter などの SNS や他の場所でシェアしない。</li>
                                <li>ジェンダーやセクシュアリティ、年齢などプライベートな情報は相手から話してこない限り聞かないことを守る。具体的にはパートナーの有無、結婚しているか、子供がいるか欲しいと思っているかなどが含まれます。</li>
                                <li>全員が他者に対して恋愛感情や性的欲求を抱くわけではなく、また抱くとしてもその相手が男性とは限らないので、彼氏や夫はいるのか等の質問、永住権を取るには又は語学力を上達させるには現地で恋人を作ればいいなどと言ったアドバイスはしない。</li>
                                <li>身体的特徴に関することは褒めるつもりでも言及しない。</li>
                                <li>他人のアクセントやイントネーションを笑ったり見下したりしない。</li>
                                <li>このコミュニティは無償で協力してくれている人たちのおかげで成り立っています。「無料で使える便利な相談所」ではありません。誰かが時間を割いて手伝ってくれたら、それを当然と思わず感謝とそれに対するフィードバックを忘れず、助けてもらった分はいつか他の人を助けてあげることでコミュニティに還元してください。</li>
                                <li>自虐はしない。自分の年齢や能力について自分だけを貶めているつもりでも、同じような年齢、能力などを持つ他人を貶めることになるし、例えば年齢について自虐することは若い方が良いなどの価値観を強化することにもなります。このコミュニティはセーフスペースです。自分のことを不必要に貶める必要はありません。</li>
                                <li>このコミュニティに上下はありません。キャリアチェンジのために勉強中だったり、みんなより年上だったり年下だったりで気後れしてしまうこともあるかもしれませんが、海外で働いている人の方が日本で働いている人より偉いわけでも、すでにエンジニアとして働いている人の方が勉強中の人より偉いわけでもないです。</li>
                                <li>アジア人女性、ノンバイナリーとしては tech でマイノリティであっても、コミュニティの中ではジェンダーやセクシュアリティ、家庭環境などそれぞれ別の面でマジョリティであり特権もあって、みんなが同じわけではありません。このコミュニティには色んな境遇の人がいること、誰もが何かの面ではマジョリティで差別の加害者になり得ることを忘れないでください。</li>
                                <li>悪意のある差別が禁止なのは前提の上で、差別的言動があったときにそこに悪意があったかは関係ないという考えで運営しています。無意識の差別や偏見を指摘されたとき、悪意がなかったことは言い訳にならないことを覚えておいてください。</li>
                                <li>利益を得ることが目的での宣伝は禁止ですが、自分に利益があることを明記した上で良かった講座の招待コードなどをシェアしてもらうのは大丈夫です。ただし頻度にもよるしケースバイケースなので、不明な点があれば運営チームまで相談してください。</li>
                            </ul>
                        </div>
                        <Button className='close-rulebook-button' variant="outlined" onClick={() => handleRuleBookClick(false)}>閉じる</Button>
                    </Paper>}
                </div>
                <a className="image-credit" href="https://www.freepik.com/vectors/summer-time">Background image credit: Summer time vector created by rawpixel.com - www.freepik.com</a>
            </div>
        </div>
    )
}