import PropTypes from 'prop-types';
import styles from './styles.module.css'

export const InnerContainer = ({ maxWidth, children }) => {
  return <div style={{maxWidth: maxWidth ? maxWidth : 'undefined'}} className={styles.innerContainer}>
            {children}
          </div>
}

InnerContainer.propTypes = {
  maxWidth: PropTypes.number,
  children: PropTypes.node
};