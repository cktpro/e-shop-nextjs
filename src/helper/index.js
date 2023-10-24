import Image from "next/image";
import styles from "@/components/flashSaleItem/flashSaleItem.module.css";

const renderStars = (numOfStar) => {
    const MAX_STAR = 5;
    const stars = [];

    const renderStar = (imageName) => {
        return (
            <div key={stars.length} className={styles.cover_flashsale_star}>
                <Image
                    src={require(`@/assets/star/${imageName}.png`)}
                    className="d-block w-100"
                    alt="..."
                />
            </div>
        );
    };

    if (numOfStar >= MAX_STAR) {
        for (let i = 1; i <= MAX_STAR; i++) {
            stars.push(
                renderStar("orangeStar")
            );
        }

        return stars;
    }

    for (let i = 1; i <= Math.floor(numOfStar); i++) {
        stars.push(
            renderStar("orangeStar")
        );
    }

    let remainingStars = MAX_STAR - numOfStar;

    if (remainingStars <= 0) {
        return stars;
    }

    if (remainingStars - Math.floor(remainingStars) === 0.5) {
        stars.push(
            renderStar("star-half-filled")
        );
    } else if (remainingStars - Math.floor(remainingStars) > 0.5) {
        stars.push(
            renderStar("grayStar")
        );
    } else if (remainingStars - Math.floor(remainingStars) < 0.5 && remainingStars - Math.floor(remainingStars) > 0) {
        stars.push(
            renderStar("orangeStar")
        );
    }

    if (remainingStars >= 1) {
        for (let i = 1; i <= Math.floor(remainingStars); i++) {
            stars.push(
                renderStar("grayStar")
            );
        }
    }

    return stars;
};

const formatTime = (seconds) => {
    const day = Math.floor(seconds / 86400);
    const hour = Math.floor((seconds % 86400) / 3600);
    const minute = Math.floor((seconds % 3600) / 60);
    const second = seconds % 60;
    const dateTime = {
        day: day,
        hour: hour,
        minute: minute,
        second: second,
    };

    return dateTime;
}

const formatNumberToString = (number) => {
    let string;
    if (number < 10) {
        string = `0${number.toString()}`;
    } else {
        string = number.toString();
    }

    return string;
}

export {
    renderStars,
    formatTime,
    formatNumberToString,
};