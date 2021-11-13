import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './RegistrationForm.module.css';
import { TextField, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

<div className={styles.innerContainer}>
      <div className={styles.logoBox}>
        <img className={styles.logo} src={logo} alt="wallet" />
        <h1 className={styles.text}>Wallet</h1>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          className={classes.width}
          name="email"
          type="email"
          values={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon htmlColor="#E0E0E0" />
              </InputAdornment>
            ),
          }}
          helperText={touched.email && errors.email}
        />
        <TextField
          className={classes.width}
          type={values.showPassword ? 'text' : 'password'}
          name="password"
          values={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon htmlColor="#E0E0E0" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  style={{ color: '#E0E0E0' }}
                  type="bool"
                  name="showPassword"
                  aria-label="toggle password visibility"
                  onClick={() =>
                    setValues(prev => ({
                      ...prev,
                      showPassword: !prev.showPassword,
                    }))
                  }
                  onMouseDown={e => e.preventDefault()}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          helperText={touched.password && errors.password}
        />
        <div className={styles.wrapProgress}>
          <TextField
            className={classes.width}
            type={values.showConfirmPassword ? 'text' : 'password'}
            name="confirm"
            values={values.confirm}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Enter your password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon htmlColor="#E0E0E0" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    style={{ color: '#E0E0E0' }}
                    type="bool"
                    name="showConfirmPassword"
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setValues(prev => ({
                        ...prev,
                        showConfirmPassword: !prev.showConfirmPassword,
                      }))
                    }
                    onMouseDown={e => e.preventDefault()}
                  >
                    {values.showConfirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            helperText={touched.confirm && errors.confirm}
          />
          <div className={styles.progressbar}>
            <progress
              min="0"
              max="4"
              value={valuesRange}
              id="progress"
            ></progress>
          </div>
        </div>
        <TextField
          className={classes.width}
          type="text"
          name="name"
          values={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter you name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon htmlColor="#E0E0E0" />
              </InputAdornment>
            ),
          }}
          helperText={touched.firstName && errors.firstName}
        />
        <div className={styles.btnWrapper}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              marginBottom: 20,
              width: '100%',
              maxWidth: 280,
              borderRadius: 20,
              padding: '13px 68px',
            }}
          >
            Sign up
          </Button>
          <Link to={routes.login} className={styles.linkBtn}>
            Sign in
          </Link>
        </div>
      </form>
    </div>