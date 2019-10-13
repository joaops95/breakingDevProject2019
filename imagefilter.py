import numpy as np
import cv2
from moviepy.editor import *

#myvideo = VideoFileClip('./video/testvideo.mp4')
#myvideoedited = myvideo.subclip(35, 120)
#myvideoedited.write_videofile('./video/cuttedclip.mp4',audio=False)

def filterImg(frame):
    blurred_frame = cv2.GaussianBlur(frame, (5,5), 0)
    #hsv = cv2.cvtColor(blurred_frame, cv2.COLOR_BGR)
    lower_green = np.array([18,31,26])
    high_green = np.array([57,70,63])
    lower_greenyell = np.array([57,70,63])
    high_greenyell = np.array([97,110,133])
    lower_yellow = np.array([97,110,133])
    high_yellow = np.array([143,156,171])
    mask = cv2.inRange(blurred_frame,lower_green, high_green)
    mask2 = cv2.inRange(blurred_frame,lower_greenyell, high_greenyell)
    mask3 = cv2.inRange(blurred_frame,lower_yellow, high_yellow)
    _, contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    _, contours2, _ = cv2.findContours(mask2, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    _, contours3, _ = cv2.findContours(mask3, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    cv2.drawContours(frame, contours, -1, (0,255,0), 4)
    cv2.fillPoly(frame,contours,(0,255,0))
    cv2.drawContours(frame, contours2, -1, (0, 255, 255), 4)
    cv2.fillPoly(frame, contours2, (0, 255, 255))
    cv2.drawContours(frame, contours3, -1, (0, 0, 255), 4)
    cv2.fillPoly(frame,contours2, (0, 0, 255))
    return frame



# cv2.imshow('RealImg', img)
# cv2.imshow('Masked',mask)
# cv2.waitKey(0)
# cv2.destroyAllWindows()
def main():
    cap = cv2.VideoCapture('./video/cuttedclip.mp4')
    img = cv2.imread('./img4.png')
    while(cap.isOpened()):
        imgconverted = filterImg(img)
        _, frame = cap.read()
        blurred_frame = cv2.GaussianBlur(frame, (5,5), 0)
        #hsv = cv2.cvtColor(blurred_frame, cv2.COLOR_BGR)
        lower_green = np.array([18,31,26])
        high_green = np.array([57,70,63])
        lower_greenyell = np.array([57,70,63])
        high_greenyell = np.array([97,110,133])
        lower_yellow = np.array([97,110,133])
        high_yellow = np.array([143,156,171])
        mask = cv2.inRange(blurred_frame,lower_green, high_green)
        mask2 = cv2.inRange(blurred_frame,lower_greenyell, high_greenyell)
        mask3 = cv2.inRange(blurred_frame,lower_yellow, high_yellow)
        _, contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        _, contours2, _ = cv2.findContours(mask2, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        _, contours3, _ = cv2.findContours(mask3, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        cv2.drawContours(frame, contours, -1, (74,195,139), 2)
        cv2.drawContours(frame, contours2, -1, (0, 255, 255), 6)
        cv2.drawContours(frame, contours3, -1, (0, 0, 255), 2)
        cv2.imwrite('./img4converted.png', imgconverted) 
        cv2.imshow('result', frame)
        if (cv2.waitKey(1) & 0xFF == ord('q')):
            break
            cap.release()
            cv2.destroyAllWindows()

if __name__ == "__main__":
    main()