import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import sys
import json
import os
from dotenv import load_dotenv

load_dotenv()
#example URI: 0gW6KLC4W6vChWUHucb69N


def SpotifyData():
    cid = os.getenv("CID")
    secret = os.getenv("SECRET")

    songID = str(sys.argv[1])[14:]
    

    #Authentication - without user
    client_credentials_manager = SpotifyClientCredentials(client_id=cid, client_secret=secret)
    sp = spotipy.Spotify(client_credentials_manager = client_credentials_manager)


    
    details = sp.track(songID)


    
    print(details['name'])

    print("Artists: ")
    for singer in details['artists']:
        print(singer['name'])
    
    print("End Artists")
    
    print(str(details['popularity']) +"/100")
    
    
    features = (sp.audio_features(songID)[0])
    musicData = dict(list(features.items())[:11])

    output = json.dumps(musicData)
    print(output)

    sys.stdout.flush()

SpotifyData()