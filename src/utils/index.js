export const getAvg = (item, selection) =>
  Number(
    (
      item.reduce(
        (total, next) => total + (!selection ? next : next[selection]),
        0
      ) / item.length
    ).toFixed(2)
  );

export const getLatest = (arr, item) => Number(arr[arr.length - 1][item]);

export const processPortfolioData = (data) => {
  const kpi = data.kpi.map((item) => {
    const achievementPLatest = getLatest(
      item.kpi_by_ptj.achievement,
      'achievement_p'
    );
    const achievementLatest = getLatest(
      item.kpi_by_ptj.achievement,
      'achievement'
    );

    return {
      ...item,
      kpi_by_ptj: { ...item.kpi_by_ptj, achievementLatest, achievementPLatest },
    };
  });

  const kpiAchivements = kpi.map((item) => item.kpi_by_ptj.achievementLatest);
  const kpiAchivementPs = kpi.map((item) => item.kpi_by_ptj.achievementPLatest);
  const kpiTargets = kpi.map((item) => item.kpi_by_ptj.target);

  const kpiScore = {
    kpiIds: kpi.map((item) => item.kpi_id),
    kpiAchivementPs,
    kpiAchivementPsAvg: getAvg(kpiAchivementPs),
    kpiAchivements,
    kpiAchivementsAvg: getAvg(kpiAchivements),
    kpiTargets,
    kpiTargetsAvg: getAvg(kpiTargets),
  };

  const pi = data.pi.map((item) => {
    const piByPtj = item.pi_by_ptj.map((piItem) => {
      const achievementPAvg = getAvg(piItem.achievement, 'achievement_p');
      const achievementAvg = getAvg(piItem.achievement, 'achievement');
      const achievementLatest = getLatest(piItem.achievement, 'achievement');
      return { ...piItem, achievementPAvg, achievementAvg, achievementLatest };
    });

    const piByPtjAchivementP = piByPtj.map(
      ({ achievementPAvg }) => achievementPAvg
    );
    const piByPtjAchivementPAvg = getAvg(piByPtjAchivementP);
    const piByPtjLatestAchivement = piByPtj.map(
      ({ achievementLatest }) => achievementLatest
    );
    const piByPtjLatestAchivementAvg = getAvg(piByPtjLatestAchivement);
    const piByPtjTarget = piByPtj.map(({ target }) => target);
    const piByPtjTargetAvg = getAvg(piByPtjTarget);

    return {
      ...item,
      pi_by_ptj: piByPtj,
      piByPtjLatestAchivement,
      piByPtjLatestAchivementAvg,
      piByPtjAchivementP,
      piByPtjAchivementPAvg,
      piByPtjTarget,
      piByPtjTargetAvg,
    };
  });

  const piScore = {
    piAchivement: pi.map(
      ({ piByPtjLatestAchivementAvg }) => piByPtjLatestAchivementAvg
    ),
    piAchivementAvg: getAvg(
      pi.map(({ piByPtjLatestAchivementAvg }) => piByPtjLatestAchivementAvg)
    ),
    piAchivementP: pi.map(({ piByPtjAchivementPAvg }) => piByPtjAchivementPAvg),
    piAchivementPAvg: getAvg(
      pi.map(({ piByPtjAchivementPAvg }) => piByPtjAchivementPAvg)
    ),
    piTarget: pi.map(({ piByPtjTargetAvg }) => piByPtjTargetAvg),
    piTargetAvg: getAvg(pi.map(({ piByPtjTargetAvg }) => piByPtjTargetAvg)),
  };

  return {
    ...data,
    kpi,
    kpiScore,
    pi,
    piScore,
  };
};
