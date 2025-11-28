import {type GetTrackListOutput} from '../ui/TrackItem';
import {type GetTrackDetailsOutput} from '../ui/TrackDetails';

const apiKey = import.meta.env.VITE_API_KEY;

export const api = {
    getTracks() {
        return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': apiKey,
            }
        })
            .then((res) => res.json() as Promise<{data: GetTrackListOutput[]}>)
    },
    getTrack(trackId: string) {
        return fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
            headers: {
                'api-key': '99251b48-1aac-418f-b8c7-57c4bffbf15f',
            }
        })
            .then(res => res.json() as Promise<{data: GetTrackDetailsOutput}>)
    }
}
