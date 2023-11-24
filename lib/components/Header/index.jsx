import PropTypes from 'prop-types';
import styles from './styles.module.css'

export const Header = () => {
  return <header className={styles.outerContainer}>
            <div className={styles.innerContainer}>
              hello
            </div>
        </header>
}

Header.propTypes = {
  name: PropTypes.string
};