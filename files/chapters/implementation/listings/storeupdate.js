     case ActionTypes.RECEIVE_RAW_ROLES:
      roles = TopBarUtils.convertRawRole(action.rawRoles)
      _addRoles(roles);
      UsersStore.emitChange();
      break;
