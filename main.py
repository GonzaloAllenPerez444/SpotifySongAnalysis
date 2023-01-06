import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import sys
import json
import os
from dotenv import load_dotenv

load_dotenv()
#example URI: spotify:track:1Qrg8KqiBpW07V7PNxwwwL


def SpotifyData():
    cid = os.getenv("CID")
    secret = os.getenv("SECRET")

    songID = str(sys.argv[1])[14:]
    

    #Authentication - without user
    client_credentials_manager = SpotifyClientCredentials(client_id=cid, client_secret=secret)
    sp = spotipy.Spotify(client_credentials_manager = client_credentials_manager)


    
    details = sp.track(songID)


    """
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

    """
    artistList = [singer['name'] for singer in details['artists']]
    
    
    features = (sp.audio_features(songID)[0])
    musicData = dict(list(features.items())[:11])

    


    masterDict = {"Artists" : artistList,"SongName" : details["name"], "Popularity" : details["popularity"], "stats" : musicData}
    masterString = json.dumps(masterDict)
    print(masterString)
    sys.stdout.flush() 



try: 
    SpotifyData()
except: 
    print("Error")
    sys.stdout.flush()
