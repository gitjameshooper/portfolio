import React, { useContext, useState, useRef, useEffect } from "react";
import { Context } from "./../../store";
import "./remote.scss";
import clickOnSrc from "./../../assets/audio/click-on.mp3";
import clickOffSrc from "./../../assets/audio/click-off.mp3";
import { useHistory } from "react-router-dom";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Remote(props) {
  const [store, setStore] = useContext(Context);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);
  const history = useHistory();
  const playClickSound = (src) => {
    let audio = new Audio(src);
    if (!store.mute) {
      audio.load();
      audio.volume = (store.volumeNum * 5) / 100;
      audio.play();
    }
  };
  const onBtnDown = (e, btnName, type) => {
    e.preventDefault();
    // Volume Button
    if (store.isTvOn && type === "mouseDown") {
      intervalRef.current = setInterval(() => {
        let num;
        if (btnName === "btnVolTop") {
          num = store.volumeNum >= 20 ? 20 : store.volumeNum++;
        } else if (btnName === "btnVolBot") {
          num = store.volumeNum <= 0 ? 0 : store.volumeNum--;
        }
        setStore((store) => {
          return { ...store, showVolume: true, volumeNum: num, mute: false };
        });
      }, 150);
    } else {
      clearInterval(intervalRef.current);
    }
  };

  const onBtnClick = (e, btnName, path, channel) => {
    e.preventDefault();

    // Mute
    if (store.isTvOn && btnName === "mute") {
      setStore({ ...store, showVolume: true, mute: !store.mute });
      return;
    }
    // Guide
    if (store.isTvOn && btnName === "guide") {
      setStore({ ...store, guide: !store.guide });
      playClickSound(clickOnSrc);
      return;
    }
    // Channel Button Top
    if (store.isTvOn && btnName === "btnChTop") {
      let channel = store.channel < 9 ? store.channel + 1 : 0;
      setStore({ ...store, channel: channel, isTvPwrBtn: false });
      playClickSound(clickOnSrc);
      history.push(`/channel-${channel}`);
      return;
    }
    // Channel Button Bottom
    if (store.isTvOn && btnName === "btnChBot") {
      let channel = store.channel > 0 ? store.channel - 1 : 9;
      setStore({ ...store, channel: channel, isTvPwrBtn: false });
      playClickSound(clickOnSrc);
      history.push(`/channel-${channel}`);
      return;
    }
    // Power Button
    if (!store.isTvOn && btnName === "power") {
      setStore({ ...store, isTvOn: true, isTvPwrBtn: true, channel: channel });
      playClickSound(clickOnSrc);
      history.push("/channel-1");
    } else if (store.isTvOn && btnName === "power") {
      setStore({ ...store, isTvOn: false, isTvPwrBtn: true, guide: false, mute: false });
      playClickSound(clickOffSrc);
      history.push("/");
    } else if (store.isTvOn) {
      setStore({ ...store, channel: channel, isTvPwrBtn: false, guide: false });
      playClickSound(clickOnSrc);
      history.push(path);
    }
  };

  const showRemote = (value) => {
    if (!value && store.isTvOn && store.isRemoteInView) {
      timerRef.current = setTimeout(() => {
        setStore((store) => {
          return { ...store, isRemoteInView: false };
        });
      }, 10 * 1000);
    } else if (timerRef.current && value) {
      setStore((store) => {
        return { ...store, isRemoteInView: value };
      });
      clearTimeout(timerRef.current);
    } else if (value) {
      setStore((store) => {
        return { ...store, isRemoteInView: value };
      });
    }
  };

  useEffect(() => {
    if (!store.isTvOn) {
      history.push("/");
    }
    return () => {
      clearTimeout(timerRef.current);
      clearInterval(intervalRef.current);
    }
  }, [store.isTvOn, history]);

  return (
    <>
      <div className="remote-component-mobile">
        <a className="btn-power red" href="/channel-1" onClick={(e) => onBtnClick(e, "power", "/channel-1", 1)}>
          <PowerSettingsNewIcon />
        </a>

        <span className="channel-top" onClick={(e) => onBtnClick(e, "btnChTop", e.target.pathname, "9")}>
          <ExpandLessIcon />
          <span className="text">CH</span>
        </span>
        <span className="channel-bot" onClick={(e) => onBtnClick(e, "btnChBot", e.target.pathname, "9")}>
          <ExpandMoreIcon />
          <span className="text">CH</span>
        </span>
      </div>

      <div className="remote-component">
        <div
          className={`remote-hover ${store.isRemoteInView ? "hide" : ""}`}
          onClick={() => showRemote(true)}
          onMouseEnter={() => showRemote(true)}>
          <span className="remote-hover-text">Hover here for remote</span>
        </div>
        <div
          className={`controller ${store.isRemoteInView ? "show" : "hide"}`}
          onMouseOver={() => showRemote(true)}
          onMouseLeave={() => showRemote(false)}>
          <div className="cube">
            <span className={`tooltip ${store.isTvOn ? "hide" : ""}`}>
              Power on the TV<span className="triangle-down"></span>
            </span>
            <div className="cube-face top">
              <div className="btn-power">
                <a className="btn-push red" href="/channel-1" onClick={(e) => onBtnClick(e, "power", "/channel-1", 1)}>
                  <PowerSettingsNewIcon />
                </a>
              </div>
              <a
                className="btn-push numbers"
                href="/channel-1"
                onClick={(e) => onBtnClick(e, "btn1", e.target.pathname, 1)}>
                1
              </a>
              <a
                className="btn-push numbers"
                href="/channel-2"
                onClick={(e) => onBtnClick(e, "btn2", e.target.pathname, 2)}>
                2
              </a>
              <a
                className="btn-push numbers"
                href="/channel-3"
                onClick={(e) => onBtnClick(e, "btn3", e.target.pathname, 3)}>
                3
              </a>
              <a
                className="btn-push numbers"
                href="/channel-4"
                onClick={(e) => onBtnClick(e, "btn4", e.target.pathname, 4)}>
                4
              </a>
              <a
                className="btn-push numbers"
                href="/channel-5"
                onClick={(e) => onBtnClick(e, "btn5", e.target.pathname, 5)}>
                5
              </a>
              <a
                className="btn-push numbers"
                href="/channel-6"
                onClick={(e) => onBtnClick(e, "btn6", e.target.pathname, 6)}>
                6
              </a>
              <a
                className="btn-push numbers"
                href="/channel-7"
                onClick={(e) => onBtnClick(e, "btn7", e.target.pathname, 7)}>
                7
              </a>
              <a
                className="btn-push numbers"
                href="/channel-8"
                onClick={(e) => onBtnClick(e, "btn8", e.target.pathname, 8)}>
                8
              </a>
              <a
                className="btn-push numbers"
                href="/channel-9"
                onClick={(e) => onBtnClick(e, "btn9", e.target.pathname, 9)}>
                9
              </a>
              <a className="btn-push navy guide" href="/" onClick={(e) => onBtnClick(e, "guide")}>
                Guide
              </a>
              <a
                className="btn-push numbers zero"
                href="/channel-0"
                onClick={(e) => onBtnClick(e, "btn0", e.target.pathname, 0)}>
                0
              </a>
              <a
                className="btn-push red netflix"
                href="/netflix"
                onClick={(e) => onBtnClick(e, "netflix", e.target.pathname, 10)}>
                Netflix
              </a>
              <div className="btn-push blue btn-volume">
                <span
                  className="volume-top"
                  onMouseUp={(e) => {
                    onBtnDown(e, "btnVolTop", "mouseUp");
                  }}
                  onMouseDown={(e) => {
                    onBtnDown(e, "btnVolTop", "mouseDown");
                  }}>
                  +<br />
                  Vol
                </span>
                <span
                  className="volume-bot"
                  onMouseUp={(e) => {
                    onBtnDown(e, "btnVolBot", "mouseUp");
                  }}
                  onMouseDown={(e) => {
                    onBtnDown(e, "btnVolBot", "mouseDown");
                  }}>
                  _
                </span>
              </div>
              <span className="btn-push mute" onClick={(e) => onBtnClick(e, "mute")}>
                Mute
              </span>
              <div className="btn-push blue btn-channel">
                <span className="channel-top" onClick={(e) => onBtnClick(e, "btnChTop", e.target.pathname, "9")}>
                  <ExpandLessIcon />
                  <span className="text">CH</span>
                </span>
                <span className="channel-bot" onClick={(e) => onBtnClick(e, "btnChBot", e.target.pathname, "9")}>
                  <ExpandMoreIcon />
                </span>
              </div>
            </div>
            <div className="cube-face bottom">bottom</div>
          </div>
        </div>
      </div>
    </>
  );
}
