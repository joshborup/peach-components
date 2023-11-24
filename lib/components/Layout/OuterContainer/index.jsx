import PropTypes from 'prop-types';
import styles from './styles.module.css'

export const OuterContainer = ({ children }) => {
  return <div className={styles.outerContainer}>
          {children}
        </div>
}

OuterContainer.propTypes = {
  children: PropTypes.node
};