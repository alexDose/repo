import {Header} from './ui/Header';
import {SidebarMenu} from './ui/SidebarMenu';
import {PageTitle} from './ui/PageTitle';
import {TracksList} from './ui/TracksList';
import {TrackDetails} from './ui/TrackDetails';
import {Footer} from './ui/Footer';
import {useTrackSelection} from './bll/useTrackSelection';

export const MainApp = () => {
    const {trackId, setTrackId} = useTrackSelection()

    return (
        <>
            <Header/>
            <SidebarMenu/>
            <PageTitle/>
            <div style={{display: 'flex', gap: '30px'}}>
                <TracksList
                    selectedTrackId={trackId}
                    onSelect={setTrackId}/>
                <TrackDetails selectedTrackId={trackId}/>
            </div>
            <Footer/>
        </>
    )
}
