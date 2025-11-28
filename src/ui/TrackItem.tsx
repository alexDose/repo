import {clsx} from 'clsx';
import styles from './TrackList.module.css'

export type GetTrackListOutput = {
    id: string
    attributes: {
        title: string
        attachments: [
            {
                url: string
            }
        ]
    }
}

type Props = {
    track: GetTrackListOutput
    isSelected: boolean
    onSelect: (trackId: string) => void
}

export const TrackItem = ({track, isSelected, onSelect}: Props) => {
    const handleOnSelect = () => {
        onSelect(track.id)
    }

    const className = clsx({
        [styles.trackItem]: true,
        [styles.selected]: isSelected
    })

    return <li className={className}>
        <div onClick={handleOnSelect}>
            {track.attributes.title}
        </div>
        <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
}
