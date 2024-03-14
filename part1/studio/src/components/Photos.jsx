import styles from './Description.module.css'

export default function RecipePhoto() {
    return (
        <img src="https://cheflolaskitchen.com/wp-content/uploads/2018/10/Jollof-Rice-17.jpg.webp" width={500} height={500} alt="recipe photo" className = {styles.imageUpdates} />
    )
}