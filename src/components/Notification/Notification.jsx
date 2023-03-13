import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.styled';


export function Notification({children}) {
  return (
    <NotificationMessage>
      {children}
    </NotificationMessage>
  );

}

Notification.propTypes = {
  children: PropTypes.node.isRequired,
}