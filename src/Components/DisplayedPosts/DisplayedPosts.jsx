import styles from './DisplayedPosts.module.css';
import { TimeDate } from '../TimeDate/TimeDate.jsx';
import { HeartClick } from '../HeartClick/HeartClick.jsx';


export const DisplayedPosts = ({ thoughts, updateLikedCount, likedCount }) => {



    return (
        <div className={styles.main_wrapper}>
            <div className={styles.likedCount}>❤️×{likedCount}</div>
            {thoughts.map(post => (
                <div key={post._id} className={styles.posts}>
                    <p>{post.message}</p>
                    <div className={styles.bottomLine}>
                        <HeartClick heartLikes={post} onLikeUpdate={updateLikedCount} />
                        <TimeDate timePosted={{ time: post.createdAt }} />
                    </div>
                </div>
            ))}
        </div>
    );
}






