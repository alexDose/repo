import {useEffect, useState} from 'react';
import {api} from '../dal/api';
import {type GetTrackDetailsOutput} from '../ui/TrackDetails';

export const useTrackDetails = (trackId: string | null) => {
    const [trackDetails, setTrackDetails] = useState<GetTrackDetailsOutput | null>(null)

    useEffect(() => {
        if (!trackId) {
            return
        }
        api.getTrack(trackId)
            .then(res => setTrackDetails(res.data))
    }, [trackId])

    return {trackDetails}
}
