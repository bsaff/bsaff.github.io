`
<div className={styles.wrapper}>
  {items.map(i => (
    <div className={styles.item} key={i.label}>
      <a href={i.url}>{i.label}</a>
      <div>{i.postLabel && `${ i.postLabel }`}</div>
    </div>
  ))}
</div>
  `
