// pages/ProductPage.tsx
import styles from './ProductPage.module.css';

interface ProductItem {
    title: string;
    imageUrl: string;
    description: string;
    Pageurl: string;
}

interface ProductPageProps {
    product: ProductItem;
}

export default function ProductPage({ product }: ProductPageProps) {
    const handleVisitProduct = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className={styles.productcontainer}>
            <div className={styles.productheader}>
                <h1 className={styles.pagetitle}>{product.title}</h1>
                <p className={styles.pagesubtitle}>{product.description}</p>
            </div>

            <div className={styles.singleproductcard}>
                <div className={styles.productimagecontainer}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            className={styles.productimage}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src =
                                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDA0MDQwIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNhMGEwYTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+SW1hZ2U8L3RleHQ+Cjwvc3ZnPg==";
                            }}
                        />
                        <div className={styles.imageOverlay}></div>
                    </div>
                </div>

                <div className={styles.productinfo}>
                    <h3 className={styles.producttitle}>{product.title}</h3>
                    <div className={styles.productactions}>
                        <button
                            className={styles.btnprimary}
                            onClick={() => handleVisitProduct(product.Pageurl)}
                        >
                            <span className={styles.buttonText}>Visit Product</span>
                            <div className={styles.buttonRipple}></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}