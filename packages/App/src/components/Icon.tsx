/**
 * Icon icon set component.
 * Usage: <Icon name="icon-name" size={20} color="#4F8EF7" />
 */

import {createIconSet} from 'react-native-vector-icons';
import React from 'react';
import {Theme} from '@jupitermoney/io-theme';
import {useTheme} from '@shopify/restyle';

interface _IconProps {
  size?: number;
  color?: string;
  name:
    | 'alert-caution'
    | 'android-share'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-right'
    | 'about-jupiter'
    | 'app-settings'
    | 'arrow-up'
    | 'bank'
    | 'bolt-charge'
    | 'bottom-nav-help-chat'
    | 'block-card'
    | 'chevron-down'
    | 'caution-with-bg'
    | 'chevron-left'
    | 'chevron-right'
    | 'chevron-up'
    | 'clock'
    | 'community'
    | 'copy'
    | 'cross'
    | 'daily-limit'
    | 'deactivate'
    | 'device-deregistered'
    | 'device-registered'
    | 'edit-write'
    | 'edit'
    | 'edit-circle'
    | 'eye'
    | 'eye-closed'
    | 'europa-left'
    | 'face-id'
    | 'fingerprint'
    | 'freeze-card'
    | 'green-tick'
    | 'help'
    | 'help-attachment'
    | 'information'
    | 'iris-smartphone'
    | 'keyboard'
    | 'list-bullets'
    | 'lock'
    | 'lock-with-smiling-face'
    | 'map'
    | 'menu-more-ellipsis-kebab'
    | 'monetization-phone'
    | 'payees'
    | 'plus-add'
    | 'payment-settings'
    | 'pods'
    | 'pie-slice'
    | 'plane'
    | 'protection-shield'
    | 'request'
    | 'rotate'
    | 'read-sms'
    | 'reset-card-pin'
    | 'reset-pin'
    | 'retry'
    | 'remove'
    | 'scan-qr'
    | 'send'
    | 'settings-gear'
    | 'saving-piggy-dollars'
    | 'schedule'
    | 'search'
    | 'share'
    | 'share-light'
    | 'sleep-mode'
    | 'smiley-unlocked'
    | 'streamline-bin'
    | 'stream-line-icon-single'
    | 'tick-check'
    | 'transaction-settings'
    | 'transaction-with-clock'
    | 'transfer'
    | 'turn-off'
    | 'unblock-payee'
    | 'user-add'
    | 'verify-mpin'
    | 'android-left';
}

export interface IconProps {
  name: _IconProps['name'];
  color: keyof Theme['colors'];
  // TODO redo sizing keys
  size: keyof Theme['sizing'];
}

const glyphMap: {[key in _IconProps['name']]: number} = {
  'about-jupiter': 59668,
  'alert-caution': 59673,
  'android-share': 59649,
  'arrow-down': 59670,
  'arrow-left': 59733,
  'arrow-right': 59734,
  'arrow-up': 59665,
  'app-settings': 59721,
  bank: 59657,
  'bolt-charge': 59651,
  'bottom-nav-help-chat': 59690,
  'block-card': 59671,
  'caution-with-bg': 59685,
  'chevron-down': 59728,
  'chevron-left': 59729,
  'chevron-right': 59731,
  'chevron-up': 59730,
  clock: 59678,
  community: 59679,
  copy: 59680,
  cross: 59681,
  'daily-limit': 59664,
  deactivate: 59682,
  'device-deregistered': 59718,
  'device-registered': 59667,
  'edit-write': 59666,
  eye: 59686,
  'eye-closed': 59658,
  edit: 59666,
  'edit-circle': 59683,
  'europa-left': 59650,
  'face-id': 59687,
  fingerprint: 59688,
  'freeze-card': 59659,
  'green-tick': 59689,
  help: 59690,
  'help-attachment': 59692,
  information: 59691,
  'iris-smartphone': 59663,
  keyboard: 59693,
  'list-bullets': 59694,
  lock: 59695,
  'lock-with-smiling-face': 59661,
  map: 59696,
  'menu-more-ellipsis-kebab': 59732,
  'monetization-phone': 59720,
  'plus-add': 59648,
  payees: 59722,
  pods: 59654,
  'pie-slice': 59652,
  plane: 59660,
  'protection-shield': 59714,
  'payment-settings': 59713,
  'read-sms': 59698,
  'reset-card-pin': 59717,
  'reset-pin': 59661,
  request: 59723,
  rotate: 59726,
  retry: 59700,
  remove: 59655,
  'scan-qr': 59656,
  'saving-piggy-dollars': 59702,
  schedule: 59704,
  send: 59724,
  'share-light': 59706,
  share: 59707,
  search: 59705,
  'sleep-mode': 59708,
  'settings-gear': 59669,
  'smiley-unlocked': 59709,
  'streamline-bin': 59716,
  'stream-line-icon-single': 59710,
  'tick-check': 59672,
  transfer: 59649,
  'transaction-settings': 59711,
  'transaction-with-clock': 59725,
  'turn-off': 59712,
  'unblock-payee': 59662,
  'user-add': 59701,
  'verify-mpin': 59719,
  'android-left': 59735,
};

const _Icon = createIconSet(
  glyphMap,
  'europa',
  'europa.ttf',
) as unknown as React.FC<_IconProps>;

const Icon: React.FC<IconProps> = ({name, color: colorName, size: sizeKey}) => {
  const {colors, sizing} = useTheme<Theme>();
  return <_Icon name={name} color={colors[colorName]} size={sizing[sizeKey]} />;
};

export default Icon;
