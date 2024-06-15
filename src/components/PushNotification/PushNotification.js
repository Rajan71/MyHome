import messaging, { firebase } from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import notifee, { EventType } from '@notifee/react-native';

const PushNotification = () => {
    useEffect(() => {
        getFcmToken();
    }, []);

    const getFcmToken = async () => {
        const token = await messaging().getToken();
        // AppState.addEventListener('change', triggerBootStrap);
        console.log('fcm token', token);
        if (token) {
            console.log('Fcm Token____', token)
        } else {
            requestUserPermission();
        }
    };

    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        if (Platform.OS === 'ios') {
            // messaging().requestPermission({criticalAlert: true})
        }
        //     if (enabled) {
        //       console.log('Authorization status:', authStatus);
        //     }
    }

    async function onMessageReceived(message) {
        // setForceUpdate(!forceUpdate);
        //Foreground Notification
        // console.log('message received', message);
        // console.log('showing the local notification');

        const { data, notification } = message;
        // console.log('NOTI COUNT FROM REDUCER : ');
        // common.onCreateTriggerNotification()
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
            vibration: true,
            sound: 'default',
        });
        console.log('Data in on message received', data);

        // Required for iOS
        // See https://notifee.app/react-native/docs/ios/permissions
        await notifee.requestPermission({
            criticalAlert: true,
        });
        if (data?.fcm_options) {
            delete data['fcm_options'];
        }

        // console.log('data modified', data);

        const notificationId = await notifee.displayNotification({
            id: message?.messageId,
            title: data?.title ?? '',
            body: data?.body ?? notification?.body ?? '',
            data: data,
            android: {
                channelId,
                largeIcon: !!data?.image ? data?.image : '',
            },

            ios: {
                critical: true,
                sound: 'default',
                attachments: [{ url: !!data?.image ? data?.image : '' }],

                foregroundPresentationOptions: {
                    alert: true,
                    sound: true,
                    badge: true,
                },
            },
            // data,
            // remote:true
        });
    }

    async function onBackgroundMessageReceived(message) {
        console.log('background message received', message);

    }

    useEffect(() => {
        messaging().onMessage(onMessageReceived);
        messaging().setBackgroundMessageHandler(onBackgroundMessageReceived);

    }, []);

    useEffect(() => {
        return notifee.onForegroundEvent(({ type, detail }) => {
            //Foreground Notification on Click

            console.log('foreground notification', detail, type);
            if (type == EventType.PRESS) {
                // notificationHandling(detail?.notification);

            }
        });
        /**
         * background
         */
    }, []);
    useEffect(() => {
        notifee.onBackgroundEvent(async ({ type, detail }) => {
            const { notification, pressAction } = detail;

            // Check if the user pressed the "Mark as read" action
            if (
                type === EventType.ACTION_PRESS &&
                pressAction?.id === HomeEnum.mark_as_read
            ) {

            }
        });
    }, []);

    useEffect(() => {
        messaging().onNotificationOpenedApp(message => {
            console.log('onNotificationOpenedApp ', message);
            notificationHandling(message);
        });
    }, []);

    // Bootstrap sequence function
    function bootstrap() {
        messaging()
            .getInitialNotification()
            .then(res => {
                console.log('click baground', res);
                //         data: {}
                // from: "548397193649"
                // messageId: "1643199533651836"
                // mutableContent: true
                // notification: {title: 'test test  ', body: 'test  new Notification module in here and make it …otification module in here and make it well \ndfdf'}
                // sentTime: "1643199533"
                // console.log('Opening Screen From getInitialNotification');
                notificationHandling(res);
                //On Background Notification Click
                const type = res?.data?.actionButton;
            })
    };

    return <></>;
}



export default PushNotification;