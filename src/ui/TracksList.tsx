import '../App.css'
import {TrackItem} from './TrackItem';
import {useGetTracks} from '../bll/useGetTracks';
import styles from './TrackList.module.css'

type Props = {
    selectedTrackId: string | null
    onSelect: (trackId: string | null) => void
}

export const TracksList = ({selectedTrackId, onSelect}: Props) => {
    const {tracks} = useGetTracks()

    const handleOnSelect = (trackId: string) => {
        onSelect(trackId)
    }
    const resetSelectedTrack = () => {
        onSelect(null)
    }

    return (
        <div>
            <h2>List</h2>
            <button onClick={resetSelectedTrack}>reset</button>
            <ul className={styles.tracksList}>
                {tracks === null
                    ? <div className='loader'></div>
                    : !tracks?.length
                        ? <div>tracks are empty</div>
                        : tracks.map(track => {
                            return <TrackItem key={track.id}
                                              track={track}
                                              onSelect={handleOnSelect}
                                              isSelected={selectedTrackId === track.id}/>
                        })}
            </ul>
        </div>
    );
};

