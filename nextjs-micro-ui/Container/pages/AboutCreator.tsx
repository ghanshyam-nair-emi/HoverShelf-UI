// pages/AboutCreator.tsx
import creatorData from '../Data/creatorData';
import styles from './AboutCreator.module.css';
interface Creator {
    name: string;
    imageUrl: string;
    description: string;
    portfolioUrl: string;
}
export default function AboutCreator() {
    const creator=creatorData
    const handleVisitPortfolio = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className={styles.creatorcontainer}>
            <div className={styles.creatorheader}>
                <h1 className={styles.pagetitle}>About the Creator</h1>
                <p className={styles.pagesubtitle}>
                    Meet the creative mind behind exceptional web experiences
                </p>
            </div>

            <div className={styles.singlecreatorcard}>
                <div className={styles.creatorimagecontainer}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={creator.imageUrl}
                            alt={creator.name}
                            className={styles.creatorimage}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src =
                                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDA0MDQwIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNhMGEwYTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+UHJvZmlsZTwvdGV4dD4KPC9zdmc+";
                            }}
                        />
                        <div className={styles.imageOverlay}></div>
                    </div>
                </div>

                <div className={styles.creatorinfo}>
                    <h3 className={styles.creatortitle}>Hey I'm {creator.name}</h3>
                    <p className={styles.creatordescription}>{creator.description}</p>
                    <div className={styles.creatoractions}>
                        <button
                            className={styles.btnprimary}
                            onClick={() => handleVisitPortfolio(creator.portfolioUrl)}
                        >
                            <span className={styles.buttonText}>Check Out Portfolio</span>
                            <div className={styles.buttonRipple}></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}