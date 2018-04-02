import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class DisplayName extends React.PureComponent {

  static propTypes = {
    account: ImmutablePropTypes.map.isRequired,
  };

  render () {
    const displayNameHtml = { __html: this.props.account.get('display_name_html') };

    let accountLabel = null;
    if (this.props.account.get('admin') === true) {
      accountLabel = <span>Admin</span>;
    } else if (this.props.account.get('moderator') === true) {
      accountLabel = <span>Moderator</span>;
    }

    return (
      <span className='display-name'>
        <bdi><strong className='display-name__html' dangerouslySetInnerHTML={displayNameHtml} /></bdi> <span className='display-name__account'>@{this.props.account.get('acct')}</span>
        {accountLabel}
      </span>
    );
  }

}
