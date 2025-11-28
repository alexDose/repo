import {useEffect, useState} from 'react';
import {type GetTrackListOutput} from '../ui/TrackItem';
import {api} from '../dal/api';

export const useGetTracks = () => {
    const [tracks, setTracks] = useState<Array<GetTrackListOutput> | null>(null)

    useEffect(() => {
        api.getTracks()
        .then(res => setTracks(res.data))
    }, [])

    return {tracks}
}
