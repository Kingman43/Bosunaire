import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./map'), {

    ssr: false
});

export default Map;


//const Map = useMemo(() => dynamic(() => import('./map'), {
//    loading: () => <p>A map is loading</p>,
//    ssr: false,
//}), []);