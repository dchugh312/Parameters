import { Text, View } from 'react-native';
import {
  useApplicationAndroidInstallReferrer,
  useApplicationInstallTime,
  useApplicationAndroidLastUpdateTime,
} from '@use-expo/application';

export default function App() {
  const [referrer] = useApplicationAndroidInstallReferrer();
  const [installTime] = useApplicationInstallTime();
  const [updateTime] = useApplicationAndroidLastUpdateTime();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 10 }}>URL: {referrer || '-'}</Text>
      <Text style={{ marginBottom: 10 }}>
        Install time: {installTime ? installTime.toString() : '-'}
      </Text>
      <Text style={{ marginBottom: 10 }}>
        Last update time: {updateTime ? updateTime.toString() : '-'}
      </Text>
    </View>
  );
}
