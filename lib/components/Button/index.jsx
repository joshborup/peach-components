
import PropTypes from 'prop-types';
import styles from './styles.module.css'
export const Button = ({name}) => <div className={styles.button}>Hello {name}</div>

Button.propTypes = {
  name: PropTypes.string
};