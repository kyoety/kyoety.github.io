import React, { useEffect, useState } from "react";
import { getNowPlaying } from '../../lib/SpotifyAPI';

export const SpotifyNowPlaying = (props) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
    useEffect(() => {
        Promise.all([
            getNowPlaying(
                props.client_id,
                props.client_secret,
                props.refresh_token
            ),
        ]).then((results) => {
            setResult(results[0]);
            setLoading(false);
        });
    });

    return (
        <div>
        <div>
            {loading ?
                <div>Loading</div>
            :
                <div>
                    <div >
                        <p>{result.isPlaying ? 'Now playing' : "Currently offline"}</p>
                        {result.isPlaying && <div></div>}
                    </div>
                    {result.isPlaying &&
                        <div>
                            <div>
                                <img
                                    alt={`${result.title} album art`}
                                    src={result.albumImageUrl}
                                />
                                <div>
                                    <a href={result.songUrl} target="_blank">
                                        <p>
                                            {result.title}
                                        </p>
                                    </a>
                                    <p>
                                        {result.artist}
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    </div>
  )
};

export default SpotifyNowPlaying;