import React, { useContext } from "react";
import { Context } from "./../../../store";
import "./channel-9.scss";
import ChannelNumber from "./../channel-number/channel-number.component";
import Mute from "./../mute/mute.component";

export default function Channel9(props) {
  const [store, setStore] = useContext(Context);

  return (
    <div className={`channel-9 channels ${store.isTvOn ? "active" : "hidden"} `}>
      <div className="wrapper">
        <ChannelNumber number="9" />
        <Mute muted={store.mute} /> My heros and quotes I live by . Inspiration channel Great Quotes "A man cannot
        directly choose his circumstances, but he can choose his thoughts, and so indirectly, yet surely, shape his
        circumstances."--James Allen “Never put passion in front of principle, even if you win, you’ll lose” - Mr.
        Miyagi Abraham Lincoln - When I do good, I feel good When I do bad, I feel bad That's my religion Will Smith -
        being realistic is the most commonly traveled path to mediocrity Marylin Manson - USA is a campaign of fear and
        consumption. Keep everyone afraid and they will consume Arnold Schwarzenegger - Ask yourself who do you want to
        be….not what, but who? Muhammad Ali - I don't count my sit-ups. I only start counting when it starts hurting.
        When I feel pain…. Because that is when it really counts. Invent yourself and then re-invent yourself -Charles
        Bukowski If you are going to try, Go all the way. Do it Do it , All the way, All the way -Charles Bukowski Steve
        Jobs - Stay Hungry, Stay Foolish j sakiya sandifer - true leaders don't create followers… they create more
        leaders Bruce Lee - Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes
        the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot.
        Now, water can flow or it can crash. Be water, my friend. Anonymous -The darkest hour of the night comes just
        before the dawn “Fear is self-imposed. You create it, you can destroy it too. Behind every fear is the person
        you want to be. When fear is destroyed, it comes back as confidence.” Greg Plitt “A life inherited is one not
        lived” -James Hooper “Luck is where preparation meets opportunity.” Even if you get beat 99 times out of 100. It
        only takes 1 time. -The Little Giants It's one thing to make people laugh, it's another to make people smile.
        -Norm Macdonald “Home is not a place…it’s a feeling.” But a feeling not shared is nothing. We live in a world
        where people believe everybody is out to get you, but I’m telling you now. Some people are just out to love you.
        William Hollis If you don’t feel a little uncomfortable during your day. You are not growing. “Money is a
        beautiful thing… but if you are not enough without it you will never be enough with it.” -John Candy Pain is
        temporary. It may last a minute, or an hour, or a day, or a year, but eventually it will subside and something
        else will take its place. If I quit, however, it lasts forever. -Lance Armstrong Absorb what is useful. Discard
        what is useless. Add what is essentially your own. -Bruce Lee
      </div>
    </div>
  );
}
