import {useTrackDetails} from '../bll/useTrackDetails';
import styles from './TrackDetails.module.css'
export type GetTrackDetailsOutput = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    }
}

type Props = {
    selectedTrackId: string | null
}

export const TrackDetails = ({selectedTrackId}: Props) => {
    const {trackDetails} = useTrackDetails(selectedTrackId)

    return (
        <>
            <div className={styles.trackDetails}>
                <h2>Details</h2>
                {!trackDetails && !selectedTrackId && <p>Track is not selected</p>}
                {selectedTrackId && !trackDetails && <div className='loader'></div>}
                {selectedTrackId && trackDetails?.id !== selectedTrackId && <div className='loader'></div>}
                {trackDetails && <>
                    <h4>{trackDetails?.attributes.title}</h4>
                    <h3>Lyrics:</h3>
                    <span>{trackDetails?.attributes.lyrics ?? 'No lyrics'}</span>
                </>
                }
            </div>
        </>
    );
};

